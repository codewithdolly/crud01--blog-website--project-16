import React from "react";
import "./ViewPost.scss";
import { Typography } from "@mui/material";
import logo from "../images/logo.png";
import SubNav from "./SubNav";
import SocialMedia from "./SocialMedia";

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
       <SocialMedia />
      </div>
      <SubNav />
    </>
  );
};

export default ViewPost;
