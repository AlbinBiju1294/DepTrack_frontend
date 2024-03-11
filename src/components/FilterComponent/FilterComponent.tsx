import { useContext } from "react";
import axios from "axios";
import axiosInstance from "../../config/AxiosConfig";
import styles from "./FilterComponent.module.css";
import { Button } from "@mui/material";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useRef, useState, useEffect } from "react";
import { Du, dataSourceType, paginationtype } from "./types/index";
import ReactDropdown from "react-dropdown";
import { Table } from "antd";
import type { PaginationProps, TableColumnsType, TableProps } from "antd";
import { Tag } from "antd";

const FilterComponent = () => {
  const status = ["Completed", "Cancelled", "Rejected"];
  const [duData, setDuData] = useState<Du[]>([]);
  const [formData, setFormData] = useState({});

  const [dataSource, setDataSource] = useState<dataSourceType[]>([]);
  const [pagination, setPagination] = useState<paginationtype>({
    current: 1,
    total: 0,
    pageSize: 1,
  });

  const emptyForm = { limit: pagination.pageSize, offset: 0 };

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

  const token = localStorage.getItem("access_token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

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
  // console.log(formData, fromRef.current);

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
        const res = await axios.get(
          "http://127.0.0.1:8000/api/v1/delivery-unit/list-delivery-units/",
          config
        );
        console.log("Response from API - du's got:", res.data.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDuData();
  }, []);

  useEffect(() => {
    fetchFilteredData(1, 1);
  }, []);

  const handlePaginationChange = (newPagination: any) => {
    console.log(newPagination.current);
    fetchFilteredData(newPagination.current, 0);
  };

  const fetchFilteredData = async (page: number, origin: number) => {
    try {
      const limit = pagination.pageSize;
      const offset = (page - 1) * limit;
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   limit: limit,
      //   offset: offset,
      // }));
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
        "http://127.0.0.1:8000/api/v1/transfer/filter-transfers/",
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
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      // }));
      console.log(formData);
    } catch (error) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: page,
        total: 0,
      }));
      setDataSource([]);
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      // }));
      console.log(formData);
      console.error("Error:", error);
    }
  };

  const columns: TableColumnsType<dataSourceType> = [
    {
      title: "Transfer Id",
      dataIndex: "id",
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
    },
  ];

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
            <p className={styles.labels}>Transferred To:</p>
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
            <p className={styles.labels}>From:</p>
            <input
              type="date"
              name="transfer_date"
              onChange={(e) => handleChange("start_date", e.target.value)}
              ref={transferDateFromRef}
              className={styles.date_box}
            />
          </div>
          <div className={styles.eachdiv}>
            <p className={styles.labels}>To:</p>
            <input
              type="date"
              name="transfer_date"
              ref={transferDateToRef}
              onChange={(e) => handleChange("end_date", e.target.value)}
              className={styles.date_box}
            />
          </div>
        </div>

        <div className={styles.second_row}>
          <div className={styles.eachdiv}>
            <p className={styles.labels}>Status:</p>
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
          <div className={styles.eachdiv}>
            <p className={styles.labels}> Name:</p>
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
            <p className={styles.labels}>Number:</p>
            <input
              type="text"
              name="employee_number"
              ref={employeeNumberRef}
              onChange={(e) => handleChange("employee_number", e.target.value)}
              placeholder="Employee Number"
              className={styles.input_box}
            />
          </div>
          <div className={styles.eachdiv}>
            <Button
              disableRipple={true}
              variant="outlined"
              color="primary"
              onClick={() => {
                fetchFilteredData(1, 0);
              }}
              type="submit"
              size="small"
              sx={{
                marginRight: "5px",
              }}
              className={styles.button}
            >
              Search
            </Button>
          </div>
          <div className={styles.eachdiv}>
            <Button
              disableRipple={true}
              variant="outlined"
              color="primary"
              onClick={() => {
                handleClear();
              }}
              type="submit"
              size="small"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default FilterComponent;
