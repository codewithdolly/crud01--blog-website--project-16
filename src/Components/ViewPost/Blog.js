import React from "react";
import "./Blog.scss";
import hillImg from "../images/hill.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import HomePost from "./HomePost";
import RightSidebar from "./RightSidebar";
import PopularPost from "./PopularPost";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} className="main-img">
            <Typography>
              <img
                src={hillImg}
                alt=""
                width="100%"
                style={{ opacity: ".6", borderRadius: "10px" }}
              />
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
      </Box>

      {/* second page */}
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} sx={{ px: 2 }} >
           <HomePost />
           
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

export default Home;
