import Header from "./Header";
import AddTaskBtn from "./AddTaskBtn";
import { Container, Stack, Box } from "@mui/material";
import Todos from "./Todos";
import TagSection from "./TagSection";
import LeftSidebar from "./LeftSidebar";
import styled from "@emotion/styled";

const MdNone = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Layout() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
      </Container>
      <Stack direction="row" color={"text.primary"}>
        <MdNone>
          <LeftSidebar />
        </MdNone>

        <Box sx={{ flex: 3 }}>
          <Container maxWidth="md">
            <Todos />
          </Container>
        </Box>
        <MdNone>
          <TagSection />
        </MdNone>
      </Stack>
      <AddTaskBtn />
    </>
  );
}

export default Layout;
