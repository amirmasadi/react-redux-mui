import { createSlice } from "@reduxjs/toolkit";
const savedTheme = JSON.parse(localStorage.getItem("currentTheme"));
const initialState = {
  value: savedTheme || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state.value));
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
