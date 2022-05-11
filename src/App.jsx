import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

export default function App() {
  const storedTheme = useSelector((state) => state.theme.value);

  const theme = createTheme({
    palette: {
      mode: storedTheme,
    },
    typography: {
      fontFamily: "verdana",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}
