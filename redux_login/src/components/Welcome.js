import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import WelcomeImg from "../assets/welcome (2).gif";
const Welcome = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "96%",
        height: { md: "100vh", xs: "110vh" },
        textAlign: "center",
        padding: "2%",
        backgroundColor: "#FFE6C9",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "cursive",
          paddingTop: { md: "40px", xs: "100px" },
          fontSize: { md: "65px", xs: "45px" },
          paddingBottom: { md: "0", xs: "40px" },
        }}
      >
        Hi, {username} Congratulation to login successfully
      </Typography>
      <Box
        sx={{
          width: { md: "750px", xs: "400px" },
          margin: "auto",
          height: { md: "auto", xs: "430px" },
        }}
      >
        <img src={WelcomeImg} alt="login " width="100%" />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ width: "160px", height: "50px", marginTop: "20px" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Welcome;
