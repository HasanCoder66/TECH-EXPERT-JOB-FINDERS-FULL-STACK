import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      className="flex items-center"
      component="form"
      sx={{
        "& > :not(style)": { marginLeft: 25, width: "55ch"  },
        "& .MuiOutlinedInput-root": {
            fontSize: 15,
            "& fieldset": {
              borderColor: "#ec4843", // Default outline color
            },
            "&:hover fieldset": {
              borderColor: "#ec4843", // Outline color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ec4843", // Outline color when focused
            },
          },
      }}
     
     

      noValidate
      autoComplete="off"
    >
      <TextField
    //   className="text-2xl" 
    
    sx={{
        "& > :not(style)": { fontSize: 15,   },
      }}
        id="outlined-basic"
        placeholder="Job Title, Keywords or Company "
      />
    </Box>
  );
}
