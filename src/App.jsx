import Header from "./components/Header";
import AddTaskBtn from "./components/AddTaskBtn";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./themeStyles";
import Todos from "./components/Todos";
import TagSection from "./components/TagSection";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
        <Todos />
        <AddTaskBtn />
        <TagSection />
      </Container>
    </ThemeProvider>
  );
}
