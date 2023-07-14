import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import HomeImg from "../assets/home-image.gif";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFE6C9",
        width: "96%",
        height: { md: "100%", xs: "100vh" },
        textAlign: "center",
        padding: "2%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          padding: "50px 0 0px",
          fontFamily: "cursive",
          fontSize: { md: "74px", xs: "48px" },
        }}
      >
        Welcome to you in our simple Login
      </Typography>
      <Box
        sx={{
          width: { md: "850px", xs: "460px" },
          height: { md: "730px", xs: "500px" },
          margin: "auto",
        }}
      >
        <img
          src={HomeImg}
          alt="welcome"
          width="100%"
          height="100%"
          style={{ margin: "auto" }}
        />
      </Box>
      <Link to="/login" style={{ textAlign: "center" }}>
        <Button
          color="secondary"
          variant="contained"
          sx={{ width: "120px", height: "50px", margin: "auto" }}
        >
          Login
        </Button>
      </Link>
    </Box>
  );
};
export default Home;
