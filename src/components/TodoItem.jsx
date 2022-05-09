import { IconButton, TextField, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useRef } from "react";
import { StyledMenu, TodoStyled, TodoNumStyled } from "./todoItem-styles";
import { green, blue, red, grey } from "@mui/material/colors";
import {
  deleteTask,
  completeTask,
  editTask,
} from "../features/todosSlice";
import { useDispatch } from "react-redux";

export default function TodoItem({
  task,
  index,
  priority,
  tags,
  isComplete,
  id,
}) {
  const [menu, setMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const moreIconRef = useRef();

  const dispatch = useDispatch();

  function priorityColorHandler() {
    if (isComplete) {
      return grey[500];
    } else {
      if (priority === "low") {
        return green[500];
      } else if (priority === "normal") {
        return blue[500];
      } else {
        return red[500];
      }
    }
  }

  function delTaskHandler() {
    setMenu(false);
    dispatch(deleteTask(id));
  }

  function completeHandler() {
    setEditing(false);
    setMenu(false);
    dispatch(completeTask(id));
  }

  function editHandler() {
    setEditing(!editing);
    setMenu(false);
    // dispatch(completeTask(id));
  }

  function editSubmitHandler(ev) {
    if (ev.which === 13) {
      dispatch(editTask({ id, editedTask: ev.target.value }));
      setEditing(false);
      setMenu(false);
    }
  }

  return (
    <TodoStyled
      sx={{
        border: `1px solid ${priorityColorHandler(priority)}`,
      }}
    >
      <IconButton
        ref={moreIconRef}
        sx={{ position: "absolute", bottom: 4, right: 0 }}
        onClick={() => setMenu(true)}
      >
        <MoreVertIcon sx={{ color: `${priorityColorHandler(priority)}` }} />
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
        <MenuItem onClick={() => editHandler()} disableRipple>
          <EditIcon />
          {editing ? "Discard" : "Edit"}
        </MenuItem>
        <MenuItem onClick={() => completeHandler()} disableRipple>
          <CheckCircleIcon />
          {isComplete ? "Incomplete" : "Complete"}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => delTaskHandler()} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
      <TodoNumStyled
        variant="h2"
        sx={{ color: `${priorityColorHandler(priority)}40` }}
      >
        0{index + 1}
      </TodoNumStyled>
      {!editing ? (
        <Typography
          variant="h6"
          sx={{
            color: grey[700],
            textDecoration: isComplete ? "line-through" : "auto",
          }}
        >
          {task}
        </Typography>
      ) : (
        <TextField
          id="standard-multiline-static"
          label="Edit"
          multiline
          defaultValue={task}
          variant="standard"
          onKeyDown={(e) => editSubmitHandler(e)}
          sx={{ textAlign: "center" }}
        />
      )}
    </TodoStyled>
  );
}
