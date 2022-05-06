import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ task: "Example", priority: "low", tags: ["Example"] }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTask } = todosSlice.actions;
export default todosSlice.reducer;
