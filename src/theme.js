import { createTheme } from "@mui/material/styles";

const ubuntuTheme = createTheme({
  palette: {
    primary: {
      main: "#E95420", // Ubuntu orange
      light: "#F27D52",
      dark: "#C34113",
    },
    secondary: {
      main: "#300A24", // Ubuntu purple
      light: "#5C3C56",
      dark: "#1E0617",
    },
    background: {
      default: "#300A24", // Ubuntu desktop background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3C3B37", // Ubuntu panel color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default ubuntuTheme;
