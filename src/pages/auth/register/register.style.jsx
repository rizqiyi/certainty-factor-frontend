import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "30%",
    padding: "3%",
    [theme.breakpoints.down("md")]: {
      padding: "3%",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6%",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "9%",
      width: "90%",
    },
  },
  flex: {
    height: "450px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    marginBottom: "30px",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));

export default useStyles;
