import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import hillImg from "../images/hill.jpg";

const HomePost = () => {
  return (
    <>
      <Box >
        {blogs.map((blog) => {
          return (
            <>
              <Card sx={{my:2}}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={blog.img}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "left", p:2  }}>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet
                    accumsan imperdiet. Aliquam elementum efficitur ipsum nec
                    blandit. Pellentesque posuere vitae metus sed auctor. Nullam
                    accumsan fringilla ligula non pellentesque.{" "}
                    <Button color="inherit">
                      <ArrowRightAltIcon />
                    </Button>
                  </Typography>
                </CardContent>
                <Box
                  display="flex"
                  sx={{ justifyContent: "space-between", px: 2 }}
                >
                  <Button size="small" color="inherit">
                    Post By <span style={{ color: "#B19484" }}>. AD-THEME</span>
                  </Button>

                  <Typography>
                    {" "}
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <i
                        class="fa-brands fa-facebook-f"
                        style={{ padding: "0 5px" }}
                      />
                    </a>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <i
                        class="fa-brands fa-instagram"
                        style={{ padding: "0 5px" }}
                      />
                    </a>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <i
                        class="fa-brands fa-twitter"
                        style={{ padding: "0 5px" }}
                      />
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        {" "}
                        <i
                          class="fa-brands fa-linkedin-in"
                          style={{ padding: "0 5px" }}
                        />
                      </a>
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "gray",
                          marginLeft: "5px",
                        }}
                      >
                        <small>234</small>
                        <i
                          class="fa-solid fa-comment-dots"
                          style={{ padding: "0 5px" }}
                        />
                      </a>
                    </a>
                  </Typography>
                </Box>
              </Card>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default HomePost;

const blogs = [
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/hill.jpg"
  },
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/lappy.jpg"
  },
 
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/iceee.jpg"
  },
  
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/office.jpg"
  },
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/panting.jpg"
  },
  {
    title: `MAECENAS CONSECTETUR`,
    img: "../images/img5.jpg"
  },

 
];
