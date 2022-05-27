import { createSlice } from "@reduxjs/toolkit";

const savedTheme: string = JSON.parse(
  localStorage.getItem("currentTheme") || ""
);

interface IState {
  value: string;
}


interface IAction {
  payload: string;
}

const initialState: IState = {
  value: savedTheme || "light",
};


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state: IState, action: IAction) => {
      state.value = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state.value));
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
