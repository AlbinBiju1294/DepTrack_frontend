import { useState,useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../Authentication/authConfig";
import { callMsGraph } from "../../Authentication/graph";
import UserContext from "../../components/Contexts/UserContextProvider";
import axios, {AxiosError} from "axios";

const useLoginHandler = (onLoginSuccess: () => void) => {
  const { instance } = useMsal();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { setUser } = useContext(UserContext);

  const handleLogin = async (loginType: string) => {
    setLoading(true);
    if (loginType === "popup") {
      try {
        const response = await instance.loginPopup(loginRequest);
        const newGraph = await callMsGraph(response.accessToken)
        try {
            const login_response = await axios.post(
              "http://127.0.0.1:8000/api/v1/users/login/",
              {'email':newGraph.userPrincipalName}
            );
            localStorage.clear();
            localStorage.setItem("access_token", login_response.data.access);
            localStorage.setItem("refresh_token", login_response.data.refresh);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${login_response.data["access"]}`;
      
            const config = {
              headers: { Authorization: `Bearer ${login_response.data.access}` },
            };
      
            const userResponse = await axios.get(
              "http://127.0.0.1:8000/api/v1/users/user/",
              config
            );
      
            localStorage.setItem("user", JSON.stringify(userResponse.data.data));
            setUser(userResponse.data.data);
      
            navigate("/dashboard");
          } catch (error) {
            if (axios.isAxiosError(error)) {
              console.log(error)
              const axiosError = error as AxiosError;
              if (axiosError.response) {
                const responseData = axiosError.response.data as { error: string };
                if (responseData && responseData) {
                alert(responseData.error)
                }
              } else {
                console.error("Axios error:", axiosError.message);
              }
            } else {
              console.error("Error:", error);
            }
          }
        onLoginSuccess();
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false); // Disable loading regardless of outcome
      }
    }
  };

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return {};
    }
  };


  return { handleLogin, loading }; // Return loading state
};

export default useLoginHandler;
