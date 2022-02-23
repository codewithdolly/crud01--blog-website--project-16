import { Box, Typography } from '@mui/material'
import React from 'react'

const SocialMedia = () => {
  return (
    <Box>
         <Typography component="div" sx={{ mt: -5, textAlign:"center" }}>
          <a href="#" style={{ textDecoration: "none", color:"#B19484" }}>
            <i class="fa-brands fa-facebook-f" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#B19484" }}>
            <i class="fa-brands fa-twitter" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#B19484" }}>
            <i class="fa-brands fa-instagram" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#B19484" }}>
            {" "}
            <i class="fa-brands fa-linkedin-in" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#B19484" }}>
            <i class="fa-brands fa-github" style={{ padding: "0 5px" }} />
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#B19484" }}>
            <i
              class="fa-solid fa-earth-americas"
              style={{ padding: "0 5px" }}
            /></a>
        </Typography>
    </Box>
  )
}

export default SocialMedia