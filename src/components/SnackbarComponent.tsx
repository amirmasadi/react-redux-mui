import {FC} from "react"
import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import {RootState} from "../app/store"

const SnackbarComponent: FC = () => {
  const state = useSelector((state: RootState) => state.snackbar.value);
  return (
    <Snackbar
      open={state.open}
      autoHideDuration={6000}
      message={state.message}
    />
  );
};

export default SnackbarComponent;
