import { FC } from "react";
import Box from "@mui/material/Box";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { RootState } from "../app/store";

const Todos: FC = () => {
  const storedTodos = useSelector((state: RootState) => state.todos.value);
  const activeTag = useSelector((state: RootState) => state.tagFilter.value);

  function filterTodos() {
    if (activeTag === "all") {
      return storedTodos;
    } else if (activeTag === "incomplete") {
      return storedTodos.filter((item) => item.isComplete === false);
    } else if (activeTag === "complete") {
      return storedTodos.filter((item) => item.isComplete === true);
    } else {
      return storedTodos.filter((item) => item.tags.includes(activeTag));
    }
  }

  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    500: 1,
  };

  return (
    <Box>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filterTodos().map((t, index) => (
          <TodoItem
            task={t.task}
            index={index}
            priority={t.priority}
            isComplete={t.isComplete}
            id={t._id}
            key={t._id}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default Todos;
