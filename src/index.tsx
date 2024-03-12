import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./components/Contexts/UserContextProvider";
import { SideBarContextProvider } from "./components/Contexts/SideBarContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <SideBarContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </SideBarContextProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
