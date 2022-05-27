import Header from "./Header";
import AddTaskBtn from "./AddTaskBtn";
import { Container, Stack, Box } from "@mui/material";
import Todos from "./Todos";
import TagSection from "./TagSection";
import LeftSidebar from "./LeftSidebar";
import SnackbarComponent from "./SnackbarComponent";
import styled from "@emotion/styled";
import { FC } from "react";

const MdNone = styled(Box)(({ theme }) => ({
  flex: 1,
  // @ts-ignore
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Layout: FC = () => {
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
      <SnackbarComponent />
      <AddTaskBtn />
    </>
  );
};

export default Layout;
