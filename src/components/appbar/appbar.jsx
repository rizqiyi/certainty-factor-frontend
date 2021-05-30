import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./appbar.style";
import { Box, Container, Toolbar } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import Drawer from "../drawer/drawer";
import StyledTypography from "../typography/typography";

const AppBarComponent = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const currentPage = (path, active, inactive) => {
    return location.pathname === path ? active : inactive;
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="relative" elevation={1} className={classes.Appbar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Box>
              <StyledTypography text="CF" variant="h4" color="primary" />
            </Box>
            <Box className={classes.menuItems}>
              <Box onClick={() => history.push("/")}>
                <StyledTypography
                  text="Home"
                  classes={currentPage(
                    "/",
                    classes.menuTextActive,
                    classes.menuText
                  )}
                />
              </Box>
            </Box>
            <IconButton
              className={classes.menuButton}
              color="primary"
              onClick={toggleDrawer}
              aria-label="menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
          <Drawer open={open} toggleDrawer={toggleDrawer} />
        </Container>
      </AppBar>
      {children}
    </>
  );
};

export default AppBarComponent;
