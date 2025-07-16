import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          helperText="Do not share your password with anyone"
          // disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
