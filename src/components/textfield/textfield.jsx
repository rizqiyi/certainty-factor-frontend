import { TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./textfield.style";

const StyledTextField = ({ classes, ...rest }) => {
  const default_style = useStyles();

  return (
    <TextField
      className={classes ? classes : default_style.textfield}
      {...rest}
    />
  );
};

export default StyledTextField;
