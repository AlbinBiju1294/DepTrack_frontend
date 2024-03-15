import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
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
import UserContext from "./components/Contexts/UserContextProvider";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={user?<> <Navbar></Navbar>
      <SideBar></SideBar><Dashboard /></>:navigate('/login')} /> */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <>
                <Navbar />
                <SideBar />
                <Dashboard />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/initiatetransfer"
          element={
            user?
            (<>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <InitiateTransfer />
            </>):
            (
              <Navigate to="/login" />
            )

          }
        />
        <Route
          path="/transferhistory"
          element={
            user?(
            <>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <TransferHistory />
            </>)
            :(
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/trackrequests"
          element={
            user?(
            <>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <TrackInitiatedRequests />
            </>):
            (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/pendingapprovals"
          element={user?
            (
            <>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <PendingApprovals />
            </>):
            (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/transferdetailsdisplay/:id"
          element={user?(
            <>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <TransferDetailsDisplayForm />
            </>):
            (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            user?(
            <>
              <Navbar></Navbar>
              <SideBar></SideBar>
              <Admin />
            </>):
            (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
