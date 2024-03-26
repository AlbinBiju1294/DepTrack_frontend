import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContextProvider, User } from "../Contexts/UserContextProvider";
import styles from "./Navbar.module.css";

describe("Navbar", () => {
  const user: User = {
    id: 1,
    employee_id: 1234,
    username: "johndoe",
    role: 1,
    du_id: 1,
    employee_name: "john doe",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  test("renders navbar title", () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
        </UserContextProvider>
      </BrowserRouter>
    );

    const navbarTitle = screen.getByText("DepTrack");
    expect(navbarTitle).toBeInTheDocument();
    expect(navbarTitle.tagName).toBe("H5");
  });

  test("renders nav element with correct class", () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
        </UserContextProvider>
      </BrowserRouter>
    );

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass(styles.nav);
  });

  // Other test cases...
});
