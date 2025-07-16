import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  // const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  //   const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setCountries(event.target.value as string)
  //   }

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={onHandleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
