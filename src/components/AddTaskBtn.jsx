import { Add } from "@mui/icons-material";
import { useState } from "react";
import Drawer from "./Drawer";
import Fab from "@mui/material/Fab";
import { chipsAnimation } from "../animations";

function AddTaskBtn() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: "fixed",
          bottom: "30px",
          left: "50%",
          marginLeft: "-62px",
          animation: `${chipsAnimation} 1.5s cubic-bezier(1.000, 0.000, 0.000, 1.000) both`,
        }}
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <Add sx={{ padding: "5px 2px" }} />
        Add New
      </Fab>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
}

export default AddTaskBtn;
