import React from "react";
import { Box, Divider, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    // Box component is the most basic form is used as a replacement to the div tag
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
    </Stack>
  );
};

export default MuiLayout;
