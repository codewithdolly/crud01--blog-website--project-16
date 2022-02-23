import React from "react"
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RightSidebar from "./RightSidebar";
import PopularPost from "./PopularPost";
import MyContact from "./MyContact";

const Contact = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} sx={{ px: 2 }} >
           <MyContact />
           
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

export default Contact;
