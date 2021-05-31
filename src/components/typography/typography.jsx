import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./typography.style";

// pembuatan reusable component text
const StyledTypography = ({ classes, text, ...rest }) => {
  const default_style = useStyles();

  return (
    <Typography
      className={classes ? classes : default_style.typography}
      {...rest}
    >
      {text}
    </Typography>
  );
};

export default StyledTypography;
