import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todosSlice";
import themeReducer from "../features/themeSlice";
import tagFilterReducer from "../features/tagsFilterSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
    tagFilter: tagFilterReducer,
  },
});
