import axiosInstance from "../../config/AxiosConfig";
import "./historytable.css";
import styles from "./FilterComponent.module.css";
import { Button } from "@mui/material";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useRef, useState, useEffect } from "react";
import { Du, dataSourceType, paginationtype } from "./types/index";
import ReactDropdown from "react-dropdown";
import { Table, Pagination } from "antd";
import type { TableColumnsType } from "antd";
import { Tag } from "antd";
import * as XLSX from "xlsx";


import moment from "moment";

const FilterComponent = () => {
  const status = ["Completed", "Cancelled", "Rejected"];
  const [duData, setDuData] = useState<Du[]>([]);
  const [formData, setFormData] = useState({});
  const [dataSource, setDataSource] = useState<dataSourceType[]>([]);
  const [pagination, setPagination] = useState<paginationtype>({
    current: 1,
    total: 0,
    pageSize: 6,
  });

  const emptyForm = { limit: pagination.pageSize, offset: 0 };
  const pageSizeOptions = ["5", "6", "8", "10", "20", "50"];

  const statusRef = useRef<ReactDropdown>(null);
  const fromRef = useRef<ReactDropdown>(null);
  const toRef = useRef<ReactDropdown>(null);
  const transferDateFromRef = useRef<HTMLInputElement>(null);
  const transferDateToRef = useRef<HTMLInputElement>(null);
  const employeeNameRef = useRef<HTMLInputElement>(null);
  const employeeNumberRef = useRef<HTMLInputElement>(null);

  const options = duData.map((du) => {
    return du.du_name;
  });

  const handleDuDropdownChange = (
    selectedOption: Option,
    fieldToUpdate: string
  ) => {
    if (selectedOption.value === "Completed") {
      setFormData((FormData) => ({
        ...FormData,
        [fieldToUpdate]: 3,
      }));
    } else if (selectedOption.value === "Rejected") {
      setFormData((FormData) => ({
        ...FormData,
        [fieldToUpdate]: 4,
      }));
    } else if (selectedOption.value === "Cancelled") {
      setFormData((FormData) => ({
        ...FormData,
        [fieldToUpdate]: 5,
      }));
    } else {
      const fieldValue =
        duData.find((du) => du.du_name === selectedOption.value)?.id || -1;

      setFormData((FormData) => ({
        ...FormData,
        [fieldToUpdate]: fieldValue,
      }));
    }
  };

  const handleChange = (name: string, value: string | number) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormData((prev) => {});
    fetchFilteredData(1, 1);
    console.log(formData, "after");
    if (fromRef.current) {
      fromRef.current.setState({ selected: "From", isOpen: false });
    }
    if (toRef.current) {
      toRef.current.setState({ selected: "To", isOpen: false });
    }
    if (statusRef.current) {
      statusRef.current.setState({ selected: "Status", isOpen: false });
    }

    if (transferDateFromRef.current) transferDateFromRef.current.value = "";
    if (transferDateToRef.current) transferDateToRef.current.value = "";
    if (employeeNameRef.current) employeeNameRef.current.value = "";
    if (employeeNumberRef.current) employeeNumberRef.current.value = "";
  };

  useEffect(() => {
    const fetchDuData = async () => {
      try {
        const res = await axiosInstance.get(
          "/api/v1/delivery-unit/list-delivery-units/"
        );
        console.log("Response from API - du's got:", res.data.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDuData();
  }, []);

  const handlePaginationChange = (newPagination: number, size: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      current: newPagination,
      pageSize: size,
    }));

    console.log(newPagination);
  };

  useEffect(() => {
    console.log(pagination);
    fetchFilteredData(pagination.current, 0);
  }, [pagination.pageSize, pagination.current]);

  const fetchFilteredData = async (page: number, origin: number) => {
    try {
      const limit = pagination.pageSize;
      const offset = (page - 1) * limit;
      const qparam =
        origin === 0
          ? {
              ...formData,
              limit: limit,
              offset: offset,
            }
          : emptyForm;
      console.log(formData);
      console.log(emptyForm);
      const res = await axiosInstance.get(
        "/api/v1/transfer/filter-transfers/",
        {
          params: qparam,
        }
      );
      const responseData = res.data.data;
      console.log("Transfer history: ", responseData.results);
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: page,
        total: responseData.count,
      }));
      setDataSource(responseData.results);
      console.log(formData);
    } catch (error) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: page,
        total: 0,
      }));
      setDataSource([]);
      console.log(formData);
      console.error("Error:", error);
    }
  };
  

  const columns: TableColumnsType<dataSourceType> = [
    {
      title: "Transfer Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Employee Number",
      dataIndex: ["employee", "employee_number"],
    },
    {
      title: "Employee Name",
      dataIndex: ["employee", "name"],
    },
    {
      title: "Transferred From",
      dataIndex: ["currentdu", "du_name"],
    },
    {
      title: "Transferred To",
      dataIndex: ["targetdu", "du_name"],
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color = "green"; // Default color
        if (status === "Rejected") color = "red";
        else if (status === "Completed") color = "green";
        else if (status === "Cancelled") color = "#808080";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Transfer Date",
      dataIndex: "transfer_date",
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
  ]



  //Excel Export: to Export the transfer history to excel
    const fetchData = async () => {
      try {        
        const qparam =
         {
              ...formData,
              
            }
          
        const res = await axiosInstance.get(
          "/api/v1/transfer/filter-transfers/",
          {
            params: qparam,
          }
        );
        console.log('Response from API:', res.data);
 
  
    const rows = res.data.data.results.map((transfer: dataSourceType) => ({

      id: transfer.id,
      name: transfer.employee?.name,
      employee_number: transfer.employee?.employee_number,
      currentdu:transfer.currentdu?.du_name,
      targetdu:transfer.targetdu?.du_name,
      status:transfer.status,
      transfer_date:transfer.transfer_date
    }));


    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Transfers");

    XLSX.utils.sheet_add_aoa(worksheet, [
      ["Transfer ID", "Employee Name", "Employee Number","Transferred From","Transferred To","Status","Transfer Date"],
    ]);

    
    const columnWidths = [
      { wch: 15 },
      { wch: 20 }, 
      { wch: 15 }, 
      { wch: 20 }, 
      { wch: 20 }, 
      { wch: 15 }, 
      { wch: 15 }, 
    ];
    worksheet['!cols'] = columnWidths;


   
    XLSX.writeFile(workbook, "TransferHistory.xlsx", { compression: false});
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  
  return (
    <>
      <div className={styles.filter_container}>
        <div className={styles.first_row}>
          <div className={styles.eachdiv}>
            <p className={styles.labels}>Transferred From:</p>
            <Dropdown
              options={options}
              value="From"
              ref={fromRef}
              onChange={(selectedOption) =>
                handleDuDropdownChange(selectedOption, "currentdu_id")
              }
              className={styles.dropdown}
              controlClassName={styles.input_drop_control}
            />
          </div>

          <div className={styles.eachdiv}>
            <p className={styles.label_datefrom}>From:</p>
            <input
              type="date"
              name="transfer_date"
              onChange={(e) => handleChange("start_date", e.target.value)}
              ref={transferDateFromRef}
              className={styles.date_box}
            />
          </div>
          <div className={styles.eachdiv}>
            <p className={styles.label_to}>To:</p>
            <input
              type="date"
              name="transfer_date"
              ref={transferDateToRef}
              onChange={(e) => handleChange("end_date", e.target.value)}
              className={styles.date_box}
            />
          </div>
          <div className={styles.eachdiv}>
            <p className={styles.label_status}>Status:</p>
            <Dropdown
              options={status}
              value="status"
              ref={statusRef}
              onChange={(selectedOption) =>
                handleDuDropdownChange(selectedOption, "status")
              }
              className={styles.dropdown_status}
              controlClassName={styles.input_drop_control}
            />
          </div>
        </div>

        <div className={styles.second_row}>
          <div className={styles.eachdiv}>
            <p className={styles.label_transto}>Transferred To:</p>
            <Dropdown
              options={options}
              value="To"
              ref={toRef}
              onChange={(selectedOption) =>
                handleDuDropdownChange(selectedOption, "targetdu_id")
              }
              className={styles.dropdown}
              controlClassName={styles.input_drop_control}
            />
          </div>

          <div className={styles.eachdiv}>
            <p className={styles.label_name}> Name:</p>
            <input
              type="text"
              name="employee_name"
              ref={employeeNameRef}
              placeholder="Employee Name"
              onChange={(e) => handleChange("employee_name", e.target.value)}
              className={styles.input_box_name}
            />
          </div>
          <div className={styles.eachdiv}>
            <p className={styles.label_number}>Number:</p>
            <input
              type="text"
              name="employee_number"
              ref={employeeNumberRef}
              onChange={(e) => handleChange("employee_number", e.target.value)}
              placeholder="Employee Number"
              className={styles.input_box}
            />
          </div>
          <div className={styles.buttondiv}>
            <div className={styles.eachdiv}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  fetchFilteredData(1, 0);
                }}
                type="submit"
                size="small"
                className={styles.button}
              >
                Search
              </Button>
            </div>
            <div className={styles.eachdiv}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleClear();
                }}
                type="submit"
                size="small"
                className={styles.button}
              >
                Clear
              </Button>
            </div>
                                    
              <Button
                variant="outlined"
                color="primary"
                onClick={fetchData}
                type="submit"
                size="small"

                className={styles.button}
              >
                EXPORT 
              </Button>
          </div>
        </div>
      </div>

      <div className={styles.history_container}>
        <Table
          columns={columns}
          rowKey={(record) => record.id.toString()}
          dataSource={dataSource}
          pagination={false}
        />
        <Pagination
          size="small"
          showSizeChanger
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onShowSizeChange={handlePaginationChange}
          onChange={handlePaginationChange}
          pageSizeOptions={pageSizeOptions}
          className={styles.pagination}
        />
      </div>
    </>
  );
};

export default FilterComponent;
