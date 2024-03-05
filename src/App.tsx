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
import PendingApprovals1 from "./pages/PendingApprovals1/PendingApprovals1";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/initiatetransfer" element={<InitiateTransfer />} />
        <Route path="/transferhistory" element={<TransferHistory />} />
        <Route path="/pendingapprovals" element={<PendingApprovals />} />
        <Route path="/pendingapprovals1" element={<PendingApprovals1 />} />

        PendingApprovals1

      </Routes>
    </BrowserRouter>
  );
}

export default App;
