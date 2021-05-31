import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./link.style";

// pembuatan reusable component link
const StyledTextLink = ({ text, classes, to, underline, ...props }) => {
  const default_style = useStyles();

  return (
    <Typography
      className={classes ? classes : default_style.typography}
      {...props}
    >
      <Link component={RouterLink} to={to} underline={underline}>
        {text}
      </Link>
    </Typography>
  );
};

export default StyledTextLink;
