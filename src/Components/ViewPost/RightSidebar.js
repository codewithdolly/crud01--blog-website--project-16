import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import hillImg from "../images/hill.jpg";
import signing from "../images/signing.png";

const RightSidebar = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
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
              endIcon={<Typography component="a"rrowRightAltIcon />}
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

        {/* Latest Post */}

        <Card sx={{ my: 8 }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              padding: "10px",
              margin: "10px 0",
              borderBottom: "6px solid menu",
            }}
          >
            Live From Space
          </Typography>
          {letestPosts.map((post) => {
            return (
              <>
                {" "}
                <Box
                  sx={{ display: "flex", px: 2, py: 1, alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80 }}
                    image={post.img}
                    alt="Live from space album cover"
                  />
                  <Box>
                    <CardContent sx={{ textAlign: "left", ml: 1 }}>
                      <Typography component="div">{post.name}</Typography>
                      <Typography
                        style={{ color: "#B19484" }}
                        component="small"
                      >
                        {post.date}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </>
            );
          })}
        </Card>

        {/* Social media */}
        <Card sx={{ my: 8 }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              padding: "10px",
              margin: "10px 0",
              borderBottom: "6px solid menu",
            }}
          >
            Social Media
          </Typography>

          <Box sx={{alignItems: "center", py:2, justifyContent:"space-evenly" }}>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: "5px 8px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                <i class="fa-brands fa-facebook-f" />
              </Typography>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: "5px 5px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                <i class="fa-brands fa-twitter" />
              </Typography>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: "5px 8px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                <i class="fa-brands fa-instagram" />
              </Typography>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: " 5px 5px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                {" "}
                <i class="fa-brands fa-linkedin-in" />
              </Typography>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: " 5px 5px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                <i class="fa-brands fa-github" />
              </Typography>
              <Typography component="a"
                href="#"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#B19484",
                  color: "white",
                  padding: " 5px 5px",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              >
                <i class="fa-solid fa-earth-americas" />
              </Typography>
            </Box>
        </Card>
      </Box>
    </>
  );
};

export default RightSidebar;

const letestPosts = [
  {
    name: "MAECENAS CONSECTETUR",
    date: "07 FAB 2021",
    img: "../Images/lappy.jpg",
  },
  {
    name: "MAECENAS CONSECTETUR",
    date: "06 FAB 2021",
    img: "../Images/laptop.jpg",
  },
  {
    name: "MAECENAS CONSECTETUR",
    date: "05 FAB 2021",
    img: "../Images/img6.jpg",
  },
  {
    name: "MAECENAS CONSECTETUR",
    date: "04 FAB 2021",
    img: "../Images/ice.jpg",
  },
  {
    name: "MAECENAS CONSECTETUR",
    date: "03 FAB 2021",
    img: "../Images/see2.jpg",
  },
];
