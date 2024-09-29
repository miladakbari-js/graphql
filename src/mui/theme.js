import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh","Roboto","Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f30b7',
      dark: '#002884',
      contrastText: '#fff',
    }
  },
});

export default theme;
