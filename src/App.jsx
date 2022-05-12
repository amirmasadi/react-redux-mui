import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import { grey, blueGrey, blue } from "@mui/material/colors";

export default function App() {
  const storedTheme = useSelector((state) => state.theme.value);

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...blue,
        ...(mode === "dark" && {
          main: blue[300],
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: blueGrey[900],
          paper: blueGrey[900],
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });

  const theme = createTheme(getDesignTokens(storedTheme));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}
