import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const ContactForm = () => {
  return (
    <Box style={{padding:"10px", margin:"5px",  border:"2px solid menu", borderRadius:"10px"}}
     component="form"
      noValidate
      autoComplete="off">
      <Typography>
        {inputs.map((input) => {
          return (
            <>
              <TextField
                id="standard-helperText"
                placeholder={input.placeholder}
                helperText={input.helperText}
                fullWidth
                size="small"
                sx={{ my: 1 }}
              />
            </>
          );
        })}
      </Typography>
      <Typography>
        {" "}
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Type here..."
          style={{
            width: "100%",
            border: "1px solid silver",
            alignContent: "center",
            alignItems: "center",
          }}
        />
      </Typography>
      <Typography sx={{ my: 2 }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#B19484", textTransform: "capitalize" }}
        >
          Send
        </Button>
      </Typography>
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
