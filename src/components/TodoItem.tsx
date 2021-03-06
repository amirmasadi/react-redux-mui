import { useTheme } from "@emotion/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, TextField, Typography, Theme } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState, FC, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, editTask } from "../features/todosSlice";
// @ts-ignore
import { StyledMenu, TodoNumStyled, TodoStyled } from "./todoItem-styles";
import { showSnackbar } from "../features/snackbarSlice";

interface Props {
  task: string;
  index: number;
  priority: string;
  isComplete: boolean;
  id: string;
}

const TodoItem: FC<Props> = ({ task, index, priority, isComplete, id }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const moreIconRef = useRef<HTMLButtonElement>(null);
  //@ts-ignore
  const muiTheme = useTheme<Theme>();
  const dispatch = useDispatch();

  function priorityColorHandler(priority: string): string {
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

  function snackbarHnadler(msg: string) {
    dispatch(showSnackbar({ open: true, msg }));
    setTimeout(() => {
      dispatch(showSnackbar({ open: false, msg }));
    }, 2000);
  }

  function delTaskHandler() {
    setMenu(false);
    snackbarHnadler("Task Deleted");
    dispatch(deleteTask(id));
  }

  function completeHandler() {
    setEditing(false);
    setMenu(false);
    dispatch(completeTask(id));
    snackbarHnadler(isComplete ? "Task Incompleted" : "Task Completed");
  }

  function editHandler() {
    setEditing(!editing);
    setMenu(false);
  }

  function editSubmitHandler(ev: KeyboardEvent<HTMLDivElement>) {
    if (ev.which === 13) {
      dispatch(
        editTask({ id, editedTask: (ev.target as HTMLInputElement).value })
      );
      setEditing(false);
      setMenu(false);
      snackbarHnadler("Task Edited");
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
            //@ts-ignore
            color: muiTheme.palette.text.secondary,
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
};

export default TodoItem;
