import {
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";

let theme = createMuiTheme({
  zIndex: {
    appBar: 1251,
    modal: 1250,
    paper: 1252,
    drawer: 1250,
  },
  palette: {
    primary: {
      main: "#f06292",
      dark: "#1E94F8",
    },
    secondary: {
      main: "#DAEFF7",
    },
    error: {
      main: "#F73232",
      light: "#ffebee",
    },
    warning: {
      main: "#ffa000",
    },
    info: {
      main: "#2340F5",
    },
    grey: {
      main: "#8F8F8F",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
