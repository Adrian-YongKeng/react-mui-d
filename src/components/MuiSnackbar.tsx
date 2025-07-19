import React, { forwardRef, useState } from "react";
import { Alert, AlertProps, Button, Snackbar } from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  //prettier-ignore
  const handleClose = (event?: React.SyntheticEvent | Event,reason?: string) => {
    if (reason === "clickaway") return;
    
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>

      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
