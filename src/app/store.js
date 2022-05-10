import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todosSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: { todos: todosReducer, theme: themeReducer },
});
