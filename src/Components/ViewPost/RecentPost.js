import React from 'react'
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import hillImg from "../images/hill.jpg";
import signing from "../images/signing.png";

const RecentPost = () => {
  return (
    <>
        <Card sx={{ my: 2 }}>
          <CardMedia
            component="img"
            height="auto"
            image={hillImg}
            alt="green iguana"
          />
          <CardContent sx={{ textAlign: "center", p: 2 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              endIcon={<Typography component="a" rrowRightAltIcon />}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laboren pellentesque.{" "}
            </Typography>
            <CardMedia
              component="img"
              height="auto"
              image={signing}
              alt="green iguana"
            />
          </CardContent>
        </Card>
    </>
  )
}

export default RecentPost