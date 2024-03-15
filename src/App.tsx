import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./variables.css";
import InitiateTransfer from "./pages/InitiateTransfer/InitiateTransfer";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import TransferHistory from "./pages/TransferHistory/TransferHistory";
import PendingApprovals from "./pages/PendingApprovals/PendingApprovals";
import TrackInitiatedRequests from "./pages/TrackInitiatedRequests/TrackInitiatedRequests";
import TransferDetailsDisplayForm from "./pages/TransferDetailsDisplayForm/TransferDetailsDisplayForm";
import Admin from "./pages/Admin/Admin";
// import ExportToExcel from "./components/ExcelUpload/ExcelUpload";

function App() {

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<> <Navbar></Navbar>
      <SideBar></SideBar><Dashboard /></>} />
        <Route path="/initiatetransfer" element={<> <Navbar></Navbar>
      <SideBar></SideBar><InitiateTransfer /></>} />
        <Route path="/transferhistory" element={<> <Navbar></Navbar>
      <SideBar></SideBar><TransferHistory /></>} />
        <Route path="/trackrequests" element={<> <Navbar></Navbar>
      <SideBar></SideBar><TrackInitiatedRequests /></>} />
        <Route path="/pendingapprovals" element={<> <Navbar></Navbar>
      <SideBar></SideBar><PendingApprovals/></>} />
      <Route path="/transferdetailsdisplay/:id" element={<> <Navbar></Navbar>
      <SideBar></SideBar><TransferDetailsDisplayForm/></>} />
      <Route path="/managedu" element={<><Navbar></Navbar>
      <SideBar></SideBar><Admin/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
