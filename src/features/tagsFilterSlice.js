import { createSlice } from "@reduxjs/toolkit";

const savedTag = JSON.parse(localStorage.getItem("currentTag"));
const initialState = { value: savedTag || "all" };

const tagFilterSlice = createSlice({
  name: "tagFilter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("currentTag", JSON.stringify(state.value));
    },
  },
});

export const { changeFilter } = tagFilterSlice.actions;
export default tagFilterSlice.reducer;
