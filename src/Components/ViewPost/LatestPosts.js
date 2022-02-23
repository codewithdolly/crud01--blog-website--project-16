import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const LatestPosts = () => {
  return (
    <>
        <Card sx={{ my: 8, color: "#B19484", textAlign: "center" }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              padding: "10px",
              margin: "10px 0",
              borderBottom: "6px solid menu",
            }}
          >
            Latest Posts
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
    </>
  )
}

export default LatestPosts


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
  