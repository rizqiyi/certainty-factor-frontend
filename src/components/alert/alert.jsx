import React from "react";
import { Collapse, IconButton } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";

// pembuatan reusable component alert
const StyledAlert = ({ condition, message, reset, severity }) => {
  return (
    <Collapse in={condition}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              reset();
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>{severity === "error" ? "Gagal" : "Sukses"}</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
};

export default StyledAlert;
