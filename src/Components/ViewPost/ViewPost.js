import React from "react";
import "./ViewPost.scss";
import { Typography } from "@mui/material";
import logo from "../images/logo.png";

const ViewPost = () => {
  return (
    <>
      <div
        className="viewPost"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="div">
          <img src={logo} alt="logo" />
        </Typography>
        <Typography component="div" sx={{ mt: -5 }}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <i class="fa-brands fa-facebook-f" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <i class="fa-brands fa-instagram" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <i class="fa-brands fa-linkedin-in" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <i class="fa-brands fa-github" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa-solid fa-earth-americas"
              style={{ padding: "0 5px" }}
            />
          </a>
        </Typography>
      </div>
    </>
  );
};

export default ViewPost;
