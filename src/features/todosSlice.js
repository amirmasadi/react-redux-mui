import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      task: "Lorem ipsum dolor sit amet",
      priority: "low",
      tags: ["example", "low"],
      isComplete: false,
      _id: 123,
    },
    {
      task: "add a new todo, dont forget to add tags to find them more easily",
      priority: "high",
      tags: ["high"],
      isComplete: false,
      _id: 321,
    },
    {
      task: "consectetur adipiscing elit",
      priority: "normal",
      tags: ["normal"],
      isComplete: true,
      _id: 456,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task._id !== action.payload);
    },
    completeTask: (state, action) => {
      state.value.forEach((task) => {
        if (task._id === action.payload) {
          task.isComplete = !task.isComplete;
        }
      });
    },
    editTask: (state, action) => {
      state.value.forEach((task) => {
        if (task._id === action.payload.id) {
          task.task = action.payload.editedTask;
        }
      });
    },
  },
});

export const { addTask, deleteTask, completeTask, editTask } =
  todosSlice.actions;
export default todosSlice.reducer;
