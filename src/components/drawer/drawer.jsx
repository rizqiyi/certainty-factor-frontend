import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Box, ListItemText } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./drawer.style";

const DrawerComponent = ({ ...props }) => {
  const { open, toggleDrawer } = props;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const currentPage = (path, active, inactive) => {
    return location.pathname === path ? active : inactive;
  };

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
                  <ListItemText
                    primary="Home"
                    className={currentPage(
                      "/",
                      classes.menuTextActive,
                      classes.menuText
                    )}
                  />
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
