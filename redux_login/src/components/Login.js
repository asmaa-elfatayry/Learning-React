import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import pic from "../assets/pic.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  if (isLoggedIn) {
    navigate("/welcome");
  }
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFE6C9",
        position: "absolute",
        height: { sm: "100vh", xs: "110vh" },
        left: "0px",
        top: "0px",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "8% auto",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ gap: { lg: "100px", md: "60px", xs: "20px" } }}
        >
          <Grid item lg={6} md={4} xs={12}>
            <Box
              sx={{
                height: { lg: "650px", md: "500px", xs: "300px" },
                width: { md: "auto", xs: "400px" },
                margin: "auto",
              }}
            >
              <img width="100%" alt="login" height="100%" src={pic} />
            </Box>
          </Grid>
          <Grid
            lg={4}
            md={6}
            xs={12}
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                padding: "25px 15px",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "cursive",
                  textAlign: "center",
                  marginBottom: "40px",
                  color: "#631E4D",
                  fontSize: { md: "60px", xs: "43px" },
                }}
              >
                Login to your account
              </Typography>
              <TextField
                required
                id="User_Name"
                label="UserName"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                variant="outlined"
                color="secondary"
                focused
                sx={{ width: "100%" }}
              />
              <TextField
                required
                id="Password"
                label="Password"
                type="password"
                variant="outlined"
                color="secondary"
                focused
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: "100%" }}
              />
              <Box
                sx={{
                  textAlign: "left",
                  alignSelf: "flex-start",
                }}
              >
                <Checkbox {...Label} defaultChecked color="secondary" />
                <span>Remember Me</span>
              </Box>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ width: "160px", height: "50px", marginTop: "20px" }}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
