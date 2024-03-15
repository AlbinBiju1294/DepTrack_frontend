import { useState } from "react";
import type { TableColumnsType } from "antd";
import { adminDataSourceType } from "./types";
import styles from "./AdminTable.module.css";
import { useEffect } from "react";
import { fetchDeliveryUnitData } from "./api/fetchAdmindata";
import AdminTable from "./AdminTable";

const AdminTableHandler = () => {
  const [adminDataSource, setAdminData] = useState<adminDataSourceType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [open, setOpen] = useState(false);
  const totalItems = adminDataSource.length;
  const pageSizeOptions = ["10", "20", "30", "40", "50"];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentItems = adminDataSource.slice(startIndex, endIndex);

  useEffect(() => {
    fetchDeliveryUnitData(setAdminData);
  }, []);
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
        adminDataSource={currentItems}
        columns={columns}
        current={currentPage}
        open={open}
        pageSize={pageSize}
        total={totalItems}
        onShowSizeChange={handlePageSizeChange}
        onChange={handlePageChange}
        pageSizeOptions={pageSizeOptions}
      ></AdminTable>
    </>
  );
};

export default AdminTableHandler;
