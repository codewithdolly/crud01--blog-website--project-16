import React from "react";
import "./Home.scss";
import me from "../images/ice.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RightSidebar from "./RightSidebar";
import PopularPost from "./PopularPost";
import MyStory from "./MyStory";

const AboutUs = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} sx={{ px: 2 }} >
           <MyStory />
           
          </Grid>
          <Grid sx={{ display: { xs: 'none', sm: 'block' } }} md={4} lg={4} >
           <RightSidebar />
          </Grid>
          <PopularPost />
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
