import { makeStyles } from "@material-ui/styles";

// style pada halaman home menggunakan fungsi
// bawaan material ui (jss)
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  root: {
    outline: "none",
    border: "none",
    padding: "0 30px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    minWidth: "44px",
    minHeight: "44px",
    lineHeight: "44px",
    textTransform: "inherit",
    color: "white",
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
}));

export default useStyles;
