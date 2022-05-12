import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";

export default function SnackbarComponent() {
  const state = useSelector((state) => state.snackbar.value);
  return (
    <Snackbar
      open={state.open}
      autoHideDuration={6000}
      message={state.message}
    />
  );
}
