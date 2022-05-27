import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Button,
  Typography,
  Container,
  Stack,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Chip,
} from "@mui/material";
import { useState, FC, ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { addTask } from "../features/todosSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Puller = styled(Box)(({ theme }) => ({
  width: 60,
  height: 5,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 30px)",
}));

function priorityColorHandler(pri: string) {
  if (pri === "low") {
    return "success";
  } else if (pri === "normal") {
    return "info";
  } else {
    return "error";
  }
}

interface Props {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

// @ts-ignore
const Drawer: FC<Props> = ({ showDrawer, setShowDrawer }) => {
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");
  const [tags, setTags] = useState<string[]>(["Example"]);
  const [tagsInput, setTagsInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  function tagsHandler(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault();
    setTagsInput(e.target.value);
    if (tagsInput.length > 2) {
      let inputValue = e.target.value;
      if (
        inputValue[inputValue.length - 1] === "Enter" ||
        inputValue[inputValue.length - 1] === " " ||
        inputValue[inputValue.length - 1] === ","
      ) {
        const inputValue = tagsInput.replace(/,/g, "").trim();
        if (tags.indexOf(inputValue) === -1) {
          setTags([...tags, inputValue]);
        }
        setTagsInput("");
      }
    }
  }

  function tagsDelHandler(chip: string) {
    setTags(tags.filter((tag) => tag !== chip));
  }

  function addTaskHandler() {
    setError(false);
    if (task) {
      dispatch(
        addTask({
          task,
          priority,
          tags: [...tags, priority],
          isComplete: false,
          _id: uuidv4(),
        })
      );
      setShowDrawer(false);
      setTags([]);
      setTask("");
      setPriority("low");
    } else {
      setError(true);
    }
  }
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      onOpen={() => setShowDrawer(true)}
      sx={{ borderTopRightRadius: "30px" }}
    >
      <Container maxWidth="sm">
        <Puller></Puller>
        <Stack spacing={3} alignItems="center" padding={3}>
          <Typography variant="h5" color="primary">
            Add a new Task
          </Typography>
          <TextField
            variant="outlined"
            label="New Task"
            fullWidth
            multiline
            rows="2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            error={error}
            focused={error}
          />
          <ToggleButtonGroup
            value={priority}
            exclusive
            onChange={(e) => setPriority((e.target as HTMLInputElement).value)}
            fullWidth
            color={`${priorityColorHandler(priority)}`}
          >
            <ToggleButton value={"low"}>Low</ToggleButton>
            <ToggleButton value={"normal"}>Normal</ToggleButton>
            <ToggleButton value={"high"}>High</ToggleButton>
          </ToggleButtonGroup>
          <TextField
            variant="outlined"
            label="#Tags"
            placeholder="Separate by 'comma' or 'space'"
            fullWidth
            size="small"
            value={tagsInput}
            onChange={(ev) => tagsHandler(ev)}
          />
          <Stack
            sx={{ width: "100%", transform: "translateY(-15px)" }}
            direction="row"
            justifyContent="start"
            gap={1}
            flexWrap="wrap"
          >
            {tags.map((t, i) => (
              <Chip label={t} key={i} onDelete={() => tagsDelHandler(t)} />
            ))}
          </Stack>
          <Button
            fullWidth
            variant="contained"
            onClick={() => addTaskHandler()}
          >
            Add
          </Button>
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
};

export default Drawer;
