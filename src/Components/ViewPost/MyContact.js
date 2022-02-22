import React from "react";
import Box from "@mui/material/Box";
import office from "../images/contact.jpg";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MyContact = () => {
  return (
    <>
      <Box>
        <Card sx={{ mb: 20, mt:2 }}>
          <CardMedia component="img" image={office} alt="my img" />
          <Button
            sx={{
              backgroundColor: "#9c8156",
              color: "white",
              position: "relative",
              left: "18.5rem",
              bottom: "3.5rem",
            }}
          >
            Connection
          </Button>
          <CardContent sx={{ textAlign: "left", p: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#B19484"
            >
              ABOUT US
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet.
              Aliquam elementum efficitur ipsum nec blandit. Pellentesque
              posuere vitae metus sed auctor. Nullam accumsan fringilla ligula
              non pellentesque. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam. Nunc maximus arcu sit
              amet accumsan imperdiet. Aliquam elementum efficitur ipsum nec
              blandit. Pellentesque posuere vitae metus sed auctor. Nullam
              accumsan fringilla ligula non pellentesque.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad minim
              veniam. Nunc maximus arcu sit amet accumsan imperdiet. Aliquam
              elementum efficitur ipsum nec blandit. Pellentesque posuere vitae
              metus sed auctor. Nullam accumsan fringilla ligula non
              pellentesque.
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ my: 3, color: "#B19484" }}
            >
              CONTACT US
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet.
              Aliquam elementum efficitur ipsum nec blandit. Pellentesque
              posuere vitae metus sed auctor. Nullam accumsan fringilla ligula
              non pellentesque. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam. Nunc maximus arcu sit
              amet accumsan imperdiet.
            </Typography>
            <br />
            <Typography component="ul" sx={{ m: 3 }}>
              <Typography component="li">
                Lorem ipsu Unde possimus saepe ipsa amet!
              </Typography>
              <Typography component="li">
                Lorem ipsum dolor sit amet. Nihil, debitis nulla quaerat
                explicabo exercitati
              </Typography>
              <Typography component="li">
                Unde possimus saepe ipsa amet!
              </Typography>
              <Typography component="li">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam. Nunc maximus
            </Typography> <br />

            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet.
              Aliquam elementum efficitur ipsum nec blandit. Pellentesque
              posuere vitae metus sed auctor. Nullam accumsan fringilla ligula
              non pellentesque. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam. Nunc maximus arcu sit
              amet accumsan imperdiet.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default MyContact;
