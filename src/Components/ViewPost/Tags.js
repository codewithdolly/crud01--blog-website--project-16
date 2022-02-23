import React from 'react'
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";


const Tags = () => {
  return (
    <>
         {/* NEWSLETTER */}
         <Card sx={{ mb: 8, py: 2, textAlign:"center" }}>
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
    </>
  )
}

export default Tags;

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