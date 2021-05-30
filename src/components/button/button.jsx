import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./button.style";

const StyledButton = ({ classes, text, ...rest }) => {
  const default_style = useStyles();

  return (
    <Button className={classes ? classes : default_style.button} {...rest}>
      {text}
    </Button>
  );
};

export default StyledButton;
