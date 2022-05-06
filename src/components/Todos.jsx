import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import Masonry from "@mui/lab/Masonry";

const tasks = [
  {
    todo: "dasdasdja lkdj slkjdlak jskjd akjs kj kajskd jsakda ;lk",
    priority: "low",
  },
  {
    todo: "linkdin account...asdasd asdasd asdada dasadasda dadadasda da",
    priority: "low",
  },
  { todo: "learn redasdasux", priority: "normal" },
  { todo: "water", priority: "high" },
];

export default function Todos() {
  return (
    <Box>
      <Masonry columns={{sm: 2, md: 3}} spacing={2} sx={{ padding: 1, margin: 0 }}>
        {tasks.map((t, index) => (
          <TodoItem task={t.todo} index={index} priority={t.priority} key={index} />
        ))}
      </Masonry>
    </Box>
  );
}
