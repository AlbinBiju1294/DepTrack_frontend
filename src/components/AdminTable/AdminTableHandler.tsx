import { useState } from "react";
import type { TableColumnsType } from "antd";
import { adminDataSourceType } from "./types";
import styles from "./AdminTable.module.css";
import { useEffect } from "react";
import { fetchDeliveryUnitData } from "./api/fetchAdmindata";
import AdminTable from "./AdminTable";

const AdminTableHandler = () => {
const [adminDataSource, setAdminData] = useState<adminDataSourceType[]>();
  
  useEffect(() => {
    fetchDeliveryUnitData(setAdminData);
  }, []);

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
      <AdminTable adminDataSource={adminDataSource}columns={columns}></AdminTable>
    </> 
  );
}

export default AdminTableHandler
