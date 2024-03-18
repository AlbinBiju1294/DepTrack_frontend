import styles from "./AddEmployeeContainer.module.css";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload as AntUpload, Button } from "antd";
import { UploadProps, UploadFile } from "antd/lib/upload";
import axiosInstance from "../../config/AxiosConfig";
import "./AntUpload.css";

const { Dragger } = AntUpload;

const AddEmployeeContainer: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

  const props: UploadProps<any> = {
    name: "file",
    multiple: true,
    fileList,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileList(info.fileList); 
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleSubmit = () => {
    const formData = new FormData();

    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("file", file.originFileObj);
      }
    });

    axiosInstance
      .post("/api/v1/employee/upload-xl", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Files successfully submitted.");
          message.success("Files successfully submitted.");
          setFileList([]);
        } else {
          console.error("Failed to submit files.");
          message.error("Failed to submit files.");
        }
      })
      .catch((error) => {
        console.error("Error submitting files:", error);
        message.error("Error submitting files.");
      });
  };

  return (
    <div className={styles.inner_container}>
      <div
        style={{
          marginTop: "2.3rem",
          height: "64vh",
          width: "155vh",
        }}
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click here to upload a excel file</p>
          <p className="ant-upload-hint">Support for a single file only.</p>
        </Dragger>
      </div>
      <Button
        style={{
          marginTop: 5,
          alignSelf: "end",
          backgroundColor: "#4154f1",
          opacity: "70%",
          color: "white",
        }}
        onClick={handleSubmit}
      >
        Import
      </Button>
    </div>
  );
};

export default AddEmployeeContainer;
