import React, { useContext, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./appbar.style";
import { Box, Container, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Drawer from "../drawer/drawer";
import StyledTypography from "../typography/typography";
import StyledTextLink from "../link/link";
import { AuthContext } from "../../context/auth_context";

const AppBarComponent = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="relative" elevation={1} className={classes.Appbar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Box>
              <StyledTypography
                text="Sistem Pakar Diagnosa Penyakit Ayam"
                variant="h6"
                color="primary"
              />
            </Box>
            <Box className={classes.menuItems}>
              <Box onClick={() => history.push("/")} mr={4}>
                <StyledTypography text="Home" classes={classes.menuText} />
              </Box>
              <Box
                onClick={() => {
                  const redirect = () => history.push("/login");

                  // ketika user click pada text logout
                  // maka user akan redirect ke halaman login
                  logout(redirect);
                }}
              >
                <StyledTextLink
                  text="Logout"
                  to="/login"
                  classes={classes.menuText}
                  underline="none"
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
