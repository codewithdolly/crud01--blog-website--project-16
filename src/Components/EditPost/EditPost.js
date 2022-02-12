import React from 'react'
import "./EditPost.scss"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import img1 from "../images/d.jpg"

const Input = styled("input")({
  display: "none",
});

const EditPost = () => {
  return (
    <>
      <Box
        className="editPost"
        component="form"
        sx={{
          "& > :not(style)": { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >

        {/* Header */}
        <TextField
          id="outlined-basic"
          placeholder="Header"
          defaultValue="Top 10 New Software"
          variant="outlined"
          id="editPost--header"
        />
        {/* Body */}
        <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={16}
            placeholder="Type here..."
            defaultValue=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in autem, ex omnis ipsum dicta iusto! Consectetur corporis quisquam aspernatur accusantium atque. Nostrum voluptas esse ab explicabo vero beatae corporis." 
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
          <Avatar variant="rounded" src={img1}  style={{
              // padding: "3rem",
              border: "1px dashed silver",
              width: "10rem",
              height: "10rem",
              marginRight: "10px",
            }}>
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
              edit
            </Button>
          </label>
        </Box>

        {/* Add post Button */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color='error'>
          <CloseIcon />
        </Button>
        <Button variant="contained" sx={{ mx: 2, px: 20 }}>
          Update
        </Button>
        </Box>
      </Box>
    </>
  )
}

export default EditPost