import React from "react";
import hillImg from "../images/image-slider-3.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <img src={hillImg} width="100%" height="auto" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
