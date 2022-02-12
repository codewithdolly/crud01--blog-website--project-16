import React from "react";
import "./NewPost.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Input = styled("input")({
  display: "none",
});

const NewPost = () => {
  return (
    <>
      <Box
        className="newPost"
        component="form"
        sx={{
          "& > :not(style)": { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{ fontSize: "25px" }}
        >
          Create New Post <br />
          -----------------------
        </Typography>

        {/* Header */}
        <TextField
          id="outlined-basic"
          placeholder="Header"
          variant="outlined"
          id="newPost--header"
        />
        {/* Body */}
        <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={16}
            placeholder="Type here..."
            style={{
              width: 500,
              border: "1px solid silver",
              borderRadius: "5px",
            }}
          />
        </Box>

        {/* Adding Images */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            style={{
              border: "1px dashed silver",
              width: "10rem",
              height: "10rem",
              marginRight: "10px",
            }}
          >
            <PhotoCamera />
          </Avatar>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" color="inherit" component="span">
              Upload
            </Button>
          </label>
        </Box>

        {/* Add post Button */}
        <Button variant="contained" color="success" sx={{ mx: 4, px: 25 }}>
          Add Post
        </Button>
      </Box>
    </>
  );
};

export default NewPost;
