import React from "react";
import Box from "@mui/material/Box";
import me from "../images/ice.jpg";
import workStation from "../images/blog1.jpg";
import girl from "../images/img4.jpg";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const MyStory = () => {
  return (
    <>
      <Box>
        <Card sx={{ mb: 20, mt:2 }}>
          <CardMedia component="img" image={me} alt="my img" />
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
              MAECENAS CONSECTETURCON SECTETURCON SECTETUR
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

            <CardMedia
              component="img"
              src={workStation}
              alt="my img"
              width="100px"
            />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ my: 3, color: "#B19484" }}
            >
              Gadgets I use to work
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

            <CardMedia component="img" src={girl} alt="my img" />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ my: 3, color: "#B19484" }}
            >
              Living Style
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
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default MyStory;
