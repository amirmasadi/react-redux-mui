import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todosSlice";
import themeReducer from "../features/themeSlice";
import tagFilterReducer from "../features/tagsFilterSlice";
import snackbarReducer from "../features/snackbarSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
    tagFilter: tagFilterReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

