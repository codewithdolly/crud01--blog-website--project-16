import React from "react";
import "./ArchivePost.scss";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Grid from '@mui/material/Grid';
import img1 from "../images/s.jpg";

const ArchivePost = () => {
  return (
    <>
      <Box
        className="archivePost"
        component="form"
        sx={{
          "& > :not(style)": { my:2  },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={4}>
       {articls.map((blog)=>{
         return (<>
          <Grid item xs={3}>
          <Card sx={{ maxWidth: 300, display:"inline-block"}}>
          <CardMedia
            component="img"
            height="180"
            image={img1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Top 10 Softwers for 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem rerum corrupti voluptatem maxime? Dolores ipsa odit perspiciatis sit magni!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              endIcon={<ThumbUpOffAltIcon />}
            >
              Like
            </Button>
            <Button
              size="small"
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              More
            </Button>
          </CardActions>
        </Card>
        </Grid>
         </>)
       })}
       </Grid>
      </Box>
    </>
  );
};

export default ArchivePost;


const articls=[
  {
    name:"Software",
  },
  {
    name:"Software",
  },
  {
    name:"Software",
  },
  {
    name:"Software",
  },
  {
    name:"Software",
  },
  {
    name:"Software",
  },
  {
    name:"Software",
  }, {
    name:"Software",
  },
]
