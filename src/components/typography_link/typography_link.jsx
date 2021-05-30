import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./typography_link.style";

const StyledTextLink = ({ text, classes, to, ...props }) => {
  const default_style = useStyles();

  return (
    <Typography
      className={classes ? classes : default_style.typography}
      {...props}
    >
      <Link component={RouterLink} to={to}>
        {text}
      </Link>
    </Typography>
  );
};

export default StyledTextLink;
