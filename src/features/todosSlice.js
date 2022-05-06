import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { task: "Example", priority: "low", tags: ["Example"], _id: 23123123213 },
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
  },
});

export const { addTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
