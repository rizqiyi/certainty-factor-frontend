import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "70vh",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "90%",
    height: "auto",
  },
  nav_items: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "10px",
    borderRadius: "20px",
    opacity: "0.8",
    filter: "drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.15))",
  },
  content: {
    width: "100%",
    height: "100px",
    borderLeft: "1px solid grey",
  },
}));

export default useStyles;
