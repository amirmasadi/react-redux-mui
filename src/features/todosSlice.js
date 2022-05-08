import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priority: "low",
      tags: ["Example", "low"],
      isComplete: false,
      _id: 23123123213,
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
  },
});

export const { addTask, deleteTask, completeTask } = todosSlice.actions;
export default todosSlice.reducer;
