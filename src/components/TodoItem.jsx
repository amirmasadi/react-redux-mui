import { Box, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState, useRef } from "react";
import { StyledMenu } from "./todoItem-styles";

const TodoStyled = styled(Box)(() => ({
  border: "1px solid violet",
  textAlign: "center",
  borderRadius: 10,
  padding: 20,
  position: "relative",
  marginTop: "35px",
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
  const [menu, setMenu] = useState(false);
  const moreIconRef = useRef();

  function anchorEl() {}
  return (
    <TodoStyled>
      <IconButton
        ref={moreIconRef}
        sx={{ position: "absolute", bottom: 4, right: 0 }}
        onClick={() => setMenu(true)}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={moreIconRef.current}
        open={menu}
        onClose={() => setMenu(false)}
      >
        <MenuItem onClick={() => setMenu(false)} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={() => setMenu(false)} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => setMenu(false)} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={() => setMenu(false)} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
      <TodoNumStyled variant="h2">0{index + 1}</TodoNumStyled>
      <Typography variant="h6">{task}</Typography>
    </TodoStyled>
  );
}
