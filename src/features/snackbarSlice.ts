import { createSlice } from "@reduxjs/toolkit";

interface IState {
  value: {
    open: boolean;
    message: string;
  };
}

type IAction = {
  payload: {
    open: boolean;
    msg: string;
  };
  type: string;
};

const initialState: IState = {
  value: {
    open: false,
    message: "",
  },
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state: IState, action: IAction) => {
      state.value = { open: action.payload.open, message: action.payload.msg };
    },
  },
});

export const { showSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
