import { createSlice } from "@reduxjs/toolkit";

type TagType = string | null;

const savedTag: TagType = JSON.parse(localStorage.getItem("currentTag") || "");

interface IState {
  value: string;
}

interface IAction {
  payload: string;
}

const initialState: IState = { value: savedTag || "all" };

const tagFilterSlice = createSlice({
  name: "tagFilter",
  initialState,
  reducers: {
    changeFilter: (state: IState, action: IAction) => {
      state.value = action.payload;
      localStorage.setItem("currentTag", JSON.stringify(state.value));
    },
  },
});

export const { changeFilter } = tagFilterSlice.actions;
export default tagFilterSlice.reducer;
