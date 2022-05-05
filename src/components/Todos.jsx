import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import Masonry from "@mui/lab/Masonry";

const tasks = [
  {
    todo: "dasdasdja lkdj slkjdlak jskjd akjs kj kajskd jsakda ;lk",
    priority: 1,
  },
  {
    todo: "linkdin account...asdasd asdasd asdada dasadasda dadadasda da",
    priority: 1,
  },
  { todo: "learn redasdasux", priority: 2 },
  { todo: "water", priority: 3 },
];

export default function Todos() {
  return (
    <Box sx={{}}>
      <Masonry columns={3} spacing={2} sx={{ padding: 1 }}>
        {tasks.map((t, index) => (
          <TodoItem task={t.todo} index={index} priority={t.priority} key={index} />
        ))}
      </Masonry>
    </Box>
  );
}
