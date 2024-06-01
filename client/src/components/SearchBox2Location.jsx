import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonCmp from "./ButtonCmp";

export default function BasicTextFields() {
  return (
    <Box
      className="flex items-center"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch", fontSize: 16 },
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
        sx={{
          "& > :not(style)": { fontSize: 15 },
        }}
        id="outlined-basic"
        placeholder="Location "
      />
      <ButtonCmp text={"Search"} />
    </Box>
  );
}
