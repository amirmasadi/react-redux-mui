import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    open: false,
    message: "",
  },
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.value = { open: action.payload.open, message: action.payload.msg };
    },
  },
});

export const { showSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
