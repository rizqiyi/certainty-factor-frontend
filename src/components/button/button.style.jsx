import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    outline: "none",
    border: "none",
    color: "white",
    padding: "0 30px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    minWidth: "44px",
    minHeight: "44px",
    lineHeight: "44px",
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
