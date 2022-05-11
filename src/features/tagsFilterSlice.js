import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "all" };

const tagFilterSlice = createSlice({
  name: "tagFilter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = tagFilterSlice.actions;
export default tagFilterSlice.reducer;
