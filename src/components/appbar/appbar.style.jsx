import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  Appbar: {
    background: "#FFFFFF",
  },
  active: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  menuItems: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "400px",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuText: {
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s all ease-out",
    fontWeight: "600 !important",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  logo: {
    width: "20%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "18%",
      height: "auto",
    },
  },
  icon: {
    width: "32px",
    height: "auto",
    margin: "0 auto",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      padding: "7px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

export default useStyles;
