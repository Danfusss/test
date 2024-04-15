import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "2rem",
      letterSpacing: "0%",
      textAlign: "center",
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: "1.13rem",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
});

export default theme;
