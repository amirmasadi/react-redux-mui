import { ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { theme } from "./themeStyles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}
