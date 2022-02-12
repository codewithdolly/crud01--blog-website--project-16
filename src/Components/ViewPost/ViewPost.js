import React from 'react'
import "./ViewPost.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import img1 from "../images/s.jpg"

const ViewPost = () => {
  return (
    <>
       <Box
        className="viewPost"
        component="form"
        sx={{
          "& > :not(style)": { m: 2, px:30 },
        }}
        noValidate
        autoComplete="off"
      >
       <Typography variant="h1" component="div" gutterBottom sx={{fontSize:"40px"}}>
        Top 10 New Software in 2022
      </Typography>
      <img src={img1} alt="" />
     <Box sx={{alignItems:"left",alignContent:"left"}}>
     <Typography variant="subtitle2" gutterBottom component="div">
        <b>subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam. unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography> <br />
      <Typography variant="subtitle2" gutterBottom component="div">
       <b> subtitle2. Lorem ipsum dolor sit ame</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis teneturquibusdam.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
     </Box>
     <Stack direction="row" spacing={1} sx={{mt:10}}>
     <Button variant="contained"  size='small' endIcon={<ThumbUpOffAltIcon />}>
        Like
      </Button>
      <Button variant="contained" color="warning" size='small' startIcon={<ShareIcon />}>
        Share
      </Button>
      
    </Stack>
      </Box>
    </>
  )
}

export default ViewPost