import React from 'react'
import Box from "@mui/material/Box";
import {Typography } from "@mui/material";
import { Card } from '@mui/material';

const FollowUs = () => {
  return (
   <>
         {/* Social media */}
         <Card sx={{ mb: 8 , textAlign:"center"}}>
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
   </>
  )
}

export default FollowUs