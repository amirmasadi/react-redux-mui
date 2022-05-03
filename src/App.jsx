import Header from "./components/Header";
import AddTaskBtn from "./components/AddTaskBtn";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./themeStyles";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
        <AddTaskBtn />
      </Container>
    </ThemeProvider>
  );
}
