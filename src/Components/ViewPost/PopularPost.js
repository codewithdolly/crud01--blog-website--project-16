import * as React from "react";
import "./PopularPost.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Grid from "@mui/material/Grid";
import { Typography, Card } from "@mui/material";

const PopularPost = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ textAlign: "center" }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              padding: "1rem 0",
              margin: "10px 0",
              borderBottom: "6px solid menu",
              color: "#B19484",
            }}
          >
            POPULAR POSTS
          </Typography>
          <ImageList className="imgList">
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                />

                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PopularPost;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "About Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Know About Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Facts of Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Play Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "How well you know about Fern",
    author: "@katie_wasserman",
  },
];
