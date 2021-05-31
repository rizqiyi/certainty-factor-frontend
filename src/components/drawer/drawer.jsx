import React, { useContext } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Box, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./drawer.style";
import { AuthContext } from "../../context/auth_context";

const DrawerComponent = ({ ...props }) => {
  const { open, toggleDrawer } = props;
  const classes = useStyles();
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div className={classes.root}>
        <Drawer
          anchor="top"
          open={open}
          disableScrollLock={true}
          onClose={toggleDrawer}
          className={classes.drawerPosition}
          classes={{ paper: classes.paper }}
        >
          <div className={classes.toolbarmixins} />
          <div className={clsx(classes.list, classes.fullList)}>
            <List className={classes.listItem}>
              <ListItem button>
                <Box
                  width="100%"
                  onClick={() => {
                    toggleDrawer();
                    history.push("/");
                  }}
                >
                  <ListItemText primary="Home" className={classes.menuText} />
                </Box>
              </ListItem>
              <ListItem button>
                <Box
                  width="100%"
                  onClick={() => {
                    toggleDrawer();
                    const redirect = () => history.push("/login");

                    // ketika user click pada text logout
                    // maka user akan redirect ke halaman login
                    logout(redirect);
                  }}
                >
                  <ListItemText primary="Logout" className={classes.menuText} />
                </Box>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerComponent;
