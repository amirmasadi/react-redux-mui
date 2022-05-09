import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";

export default function Todos() {
  const storedTodos = useSelector((state) => state.todos.value);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Box>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {storedTodos.map((t, index) => (
          <TodoItem
            task={t.task}
            index={index}
            priority={t.priority}
            tags={t.tags}
            isComplete={t.isComplete}
            id={t._id}
            key={t._id}
          />
        ))}
      </Masonry>
    </Box>
  );
}
