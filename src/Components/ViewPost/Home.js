import React from "react";
import "./Home.scss";
import hillImg from "../images/hill.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} className="main-img">
          <Typography>
            <img src={hillImg} alt="" width="100%" style={{ opacity: ".6", borderRadius:"10px" }} />
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
      
      {/* second page */}
      <Grid container  spacing={2}>
      <Grid xs={12} sm={12} md={8} lg={8} sx={{px:2}}>
      <Card>
      <CardMedia
        component="img"
        height="auto"
        image={hillImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div">
        07 JUN 2021
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        MAECENAS CONSECTETUR
        </Typography>
        <Typography variant="body2" color="text.secondary" endIcon={<ArrowRightAltIcon />}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet. Aliquam elementum efficitur ipsum nec blandit. Pellentesque posuere vitae metus sed auctor. Nullam accumsan fringilla ligula non pellentesque. <ArrowRightAltIcon />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Post</Button>
        <Button size="small">Learn</Button>
      </CardActions>
    </Card>
      {/* <img src={hillImg} alt="" width="100%" style={{ opacity: ".6", borderRadius:"10px" }} /> */}
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4}>
      <img src={hillImg} alt="" width="100%" style={{ opacity: ".6", borderRadius:"10px" }} />
</Grid>
      </Grid>
    </>
  );
};

export default Home;
