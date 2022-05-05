import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const TodoStyled = styled(Box)(() => ({
  border: "1px solid violet",
  textAlign: "center",
  borderRadius: 10,
  padding: 20,
  position: "relative",
  marginTop: "35px"
}));

const TodoNumStyled = styled(Typography)(() => ({
  position: "absolute",
  top: 0,
  left: 5,
  fontWeight: 900,
  color: "rgb(255 138 138 / 40%)",
  zIndex: -1,
}));

export default function TodoItem({ task, index, priority }) {
  return (
    <TodoStyled>
      <TodoNumStyled variant="h2">0{index + 1}</TodoNumStyled>
      <Typography variant="h6">{task}</Typography>
    </TodoStyled>
  );
}
