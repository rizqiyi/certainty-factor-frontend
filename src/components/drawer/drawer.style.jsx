import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarmixins: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    backgroundColor: "none",
    boxShadow: "none",
  },
  drawerPosition: {
    position: "relative",
    top: "20%",
    marginTop: "50px",
    backgroundColor: "none",
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  listItem: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  menuText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "0.3s all ease-out",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuTextActive: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s all ease-out",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
