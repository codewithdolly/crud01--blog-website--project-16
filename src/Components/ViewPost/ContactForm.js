import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 4, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
     <Typography>
       {inputs.map((input)=>{
          return (<>
            <TextField
          id="standard-helperText"
          placeholder={input.placeholder}
          helperText={input.helperText}
          fullWidth
          size="small"
        />
          </>)
        })}</Typography>
      <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Type here..."
          style={{ width: "90%", border:"1px solid silver", margin:"0 20px" }}
         />
    
    <Button variant="contained" style={{backgroundColor:"#B19484", textTransform: "capitalize"}}>Send</Button>
    </Box>
    
  );
};
export default ContactForm;

const inputs = [
  {
    placeholder: "Dolly Singh",
    helperText: "Full Name",
  },
  {
    placeholder: "hello@gmail.com",
    helperText: "Email",
  },
  {
    placeholder: "About your project....",
    helperText: "Subject",
  },
];
