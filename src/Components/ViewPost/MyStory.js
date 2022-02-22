import React from "react";
import Box from "@mui/material/Box";
import me from "../images/ice.jpg";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MyStory = () => {
  return (
    <>
      <Box>
        <Card sx={{ my: 2 }}>
          <CardMedia component="img" image={me} alt="green iguana" />
          <Button
            sx={{
              backgroundColor: "#9c8156",
              color: "white",
              position: "relative",
              left: "18.5rem",
              bottom: "3.5rem",
            }}
          >
            Traval
          </Button>
          <CardContent sx={{ textAlign: "left", p: 2 }}>
            <Typography gutterBottom component="div" color="#B19484">
              07 JUN 2021
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              MAECENAS CONSECTETUR
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              endIcon={<ArrowRightAltIcon />}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet.
              Aliquam elementum efficitur ipsum nec blandit. Pellentesque
              posuere vitae metus sed auctor. Nullam accumsan fringilla ligula
              non pellentesque.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default MyStory;
