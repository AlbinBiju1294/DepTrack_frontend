import { useState, useRef } from "react";
import { Option } from "react-dropdown";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import type { TableColumnsType } from "antd";
import {
  FormDataType,
  adminDataSourceType,
  duHeadsAndHrbpCandidatesType,
} from "./types";
import styles from "./AdminTable.module.css";
import { useEffect } from "react";
import {
  fetchDeliveryUnitData,
  fetchDuheadsCandidates,
  fetchHrbpCandidates,
} from "./api/fetchAdmindata";
import { postNewDu } from "./api/postNewDu";
import AdminTable from "./AdminTable";
import ReactDropdown from "react-dropdown";

const AdminTableHandler = () => {
  const [adminDataSource, setAdminData] = useState<adminDataSourceType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [open, setOpen] = useState(false);
  const [duHeadsCandidates, setDuHeads] = useState<
    duHeadsAndHrbpCandidatesType[]
  >([]);
  const [HrbpCandidates, setHrpbs] = useState<duHeadsAndHrbpCandidatesType[]>(
    []
  );
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [FormData, setFormData] = useState<FormDataType>({});
  const totalItems = adminDataSource.length;
  const pageSizeOptions = ["10", "20", "30", "40", "50"];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentItems = adminDataSource.slice(startIndex, endIndex);
  const duHeadOptions = duHeadsCandidates.map((candiate) => candiate.name);
  const hrbpOptions = HrbpCandidates.map((candidate) => candidate.name);
  const duNameInputboxRef = useRef<HTMLInputElement>(null);
  const duHeadInputRef = useRef<ReactDropdown>(null);
  const duHrbpInputRef = useRef<ReactDropdown>(null);

  useEffect(() => {
    fetchDeliveryUnitData(setAdminData);
  }, []);

  const addDu = () => {
    setOpen(true);
    fetchDuheadsCandidates(setDuHeads);
    fetchHrbpCandidates(setHrpbs);
  };

  const handleSelectDuHead = (selectedOption: Option) => {
    const selectedDuhead = duHeadsCandidates.find(
      (du) => du.name === selectedOption.value
    );
    setFormData({
      ...FormData,
      du_head_id: selectedDuhead?.employee_id,
    });
  };

  const handleSelectDuName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, du_name: e.target.value });
  };

  const handleSelectHrbp = (selectedOption: Option) => {
    const selectedHrbp = HrbpCandidates.find(
      (hr) => hr.name === selectedOption.value
    );
    setFormData({
      ...FormData,
      hrbp_id: selectedHrbp?.employee_id,
    });
  };

  const handleCloseAddDu = () => {
    setOpen(false);
    setFormData({});
    if (duHeadInputRef.current) {
      duHeadInputRef.current.setState({
        selected: "Select An Option",
        isOpen: false,
      });
    }
    if (duHrbpInputRef.current) {
      duHrbpInputRef.current.setState({
        selected: "Select An Option",
        isOpen: false,
      });
    }
    if (duNameInputboxRef.current) duNameInputboxRef.current.value = "";
  };

  const onSubmit = async () => {
    try {
      const formDataKeys = Object.keys(FormData);
      if (formDataKeys.length !== 3) {
        console.log("Please fill in all fields.");
        await messageApi.error("All Fields Are Required", 2);
        return;
      }
      const response = await postNewDu(FormData);
      if (response?.status) {
        await messageApi.success(response.message, 2);
        handleCloseAddDu();
        fetchDeliveryUnitData(setAdminData);
      } else if (response?.status == false) {
        await messageApi.error(response.message, 2);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the transfer.");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (current: number, size: number) => {
    setCurrentPage(current); // Update current page if needed
    setPageSize(size); // Update page size
  };
  const columns: TableColumnsType<adminDataSourceType> = [
    {
      title: "Du Name",
      dataIndex: ["du", "du_name"],
      key: "id",
    },
    {
      title: "Du Head",
      dataIndex: ["du_head", "name"],
    },
    {
      title: "",
      render: (_, record) => (
        <button className={styles.button} type="button">
          <p style={{ color: "#FFFF" }}>{"Change"}</p>
        </button>
      ),
    },
  ];

  return (
    <>
      <AdminTable
        contextHolder={contextHolder}
        adminDataSource={currentItems}
        columns={columns}
        current={currentPage}
        duNameInputboxRef={duNameInputboxRef}
        duHeadInputRef={duHeadInputRef}
        duHrbpInputRef={duHrbpInputRef}
        open={open}
        addDu={addDu}
        handleSelectDuName={handleSelectDuName}
        handleSelectHrbp={handleSelectHrbp}
        handleSelectDuHead={handleSelectDuHead}
        hrbpOptions={hrbpOptions}
        duHeadOptions={duHeadOptions}
        handleCloseAddDu={handleCloseAddDu}
        pageSize={pageSize}
        total={totalItems}
        onSubmit={onSubmit}
        onShowSizeChange={handlePageSizeChange}
        onChange={handlePageChange}
        pageSizeOptions={pageSizeOptions}
      ></AdminTable>
    </>
  );
};

export default AdminTableHandler;
