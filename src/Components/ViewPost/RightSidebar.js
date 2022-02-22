import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
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
        <Card sx={{ mb: 8 }}>
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

          <Box
            sx={{ alignItems: "center", py: 2, justifyContent: "space-evenly" }}
          >
            <Typography
              component="a"
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
            <Typography
              component="a"
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
            <Typography
              component="a"
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
            <Typography
              component="a"
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
            <Typography
              component="a"
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
            <Typography
              component="a"
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

        {/* NEWSLETTER */}
        <Card sx={{ mb: 8, py: 2 }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              //   padding: "5px 0",
              margin: "10px 0",
              borderBottom: "6px solid menu",
              color: "#B19484",
            }}
          >
            Tags
          </Typography>
          {tags.map((tag) => {
            return (
              <Button
                variant="outlined"
                style={{
                  margin: "3px",
                  color: "black",
                  border: "1px solid #B19484",
                }}
              >
                {tag}
              </Button>
            );
          })}
        </Card>

        <Card sx={{ mb: 8, py: 2 }}>
          <Typography
            component="div"
            variant="h5"
            style={{
        
              margin: "10px 0",
              borderBottom: "6px solid menu",
              color: "#B19484",
            }}
          >
            NEWSLETTER
          </Typography>
          <Box sx={{ p: 3 }}>
            <Typography sx={{ color: "#B19484", p: 2 }}>
              DO NOT MISS OUR NEWS
            </Typography>

            <Typography
              component="p"
              sx={{ color: "silver", fontSize: "14px", py: 2 }}
            >
              Sign up and receive the latest <br /> news of our company
            </Typography>

            <TextField
              id="filled-basic"
              label="Message..."
              variant="standard"
              fullWidth
            />
            <Button
              variant="contained"
              fullWidth
              style={{
                margin: "20px 0",
                backgroundColor: "#B19484",
                border: "1px solid #B19484",
              }}
            >
              SEND
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default RightSidebar;

const tags = [
  "AUDIO",
  "TRAVEL",
  "FOOD",
  "EVENT",
  "WORDPRESS",
  "VIDEO",
  "DESIGN",
  "SPORT",
  "BLOG",
  "POST",
  "IMG",
  "MASONRY",
];

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
