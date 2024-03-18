import * as React from "react";
import { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/Contexts/UserContextProvider";
import { message } from "antd";

const defaultTheme = createTheme();

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(user);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/token/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      localStorage.clear();
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data["access"]}`;

      const config = {
        headers: { Authorization: `Bearer ${response.data.access}` },
      };

      const userResponse = await axios.get(
        "http://127.0.0.1:8000/api/v1/users/user/",
        config
      );

      console.log(userResponse);
      localStorage.setItem("user", JSON.stringify(userResponse.data.data));
      setUser(userResponse.data.data);

      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // Axios error with response
          const responseData = axiosError.response.data as { detail: string };
          if (responseData && responseData.detail) {
            messageApi.error(responseData.detail);
          }
        } else {
          // Other Axios errors
          console.error("Axios error:", axiosError.message);
        }
      } else {
        // Other errors
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      {contextHolder}
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
