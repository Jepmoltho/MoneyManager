import { createTheme } from "@mui/material/styles";
import { green, yellow, grey, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[800],
    },
    primary: {
      main: "#4CAF50",
      light: green[400],
      dark: green[800],
    },
    secondary: {
      main: yellow[500],
      light: yellow[200],
      dark: yellow[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[500],
    },
    error: {
      main: red[500],
      light: yellow[200],
      dark: yellow[800],
    },
  },
});
/*
  palette: {
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#F44336",
    },
    background: {
      default: "#f4f4f4",
    },
  },
});
*/
/*
palette: {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[800],
    },
    primary: {
      main: "#4CAF50",
      light: green[400],
      dark: green[800],
    },
    secondary: {
      main: yellow[500],
      light: yellow[200],
      dark: yellow[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[500],
    },
  },
});
*/
