import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating({ rating }) {
  const [value, setValue] = React.useState(rating);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        "& .css-1qqgbpl-MuiRating-root": { fontSize: "2.3rem" },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
