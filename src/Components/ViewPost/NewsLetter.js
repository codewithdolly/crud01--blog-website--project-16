import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

const NewsLetter = () => {
const [value, setValue]= useState("");

const onInputChange= (event)=>{
  setValue(event.target.value)
}

const onSubmit=()=>{
  console.log(value);
  setValue("")
}

  return (
    <>
        <Card sx={{ mb: 8, py: 2, textAlign:"center" }}>
          <Typography
            component="div"
            variant="h5"
            style={{
        
              margin: "10px 0",
              borderBottom: "6px solid menu",
              color: "#B19484",
            }}
          >
            NEWS LETTER
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
              value={value}
              fullWidth
              onChange={onInputChange}
            />
            <Button
              variant="contained"
              onClick={onSubmit}
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
    </>
  )
}

export default NewsLetter