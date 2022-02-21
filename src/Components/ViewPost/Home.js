import React from "react";
import "./Home.scss";
import hillImg from "../images/hill.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Transform } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} className="main-img">
          <Typography>
            <img src={hillImg} alt="" width="100%" style={{ opacity: ".6" }} />
          </Typography>
          <Box className="main-img--text">
            <Typography variant="h3" component="div">
              AENEAN AC DIAM
            </Typography>
            <Typography variant="h5" component="div">
              Let's <span>EXPLORE</span> the world!
            </Typography>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              sx={{ mt: 5, px: 3, fontWeight: "bold" }}
            >
              See More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
