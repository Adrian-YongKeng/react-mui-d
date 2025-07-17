import React from "react";
import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    // Box component is the most basic form is used as a replacement to the div tag
    <>
      <Box
        //   component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        Codevolution
      </Box>

      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </>
  );
};

export default MuiLayout;
