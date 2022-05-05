import { Add } from "@mui/icons-material";
import { SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";
import Drawer from "./Drawer";
import { Fab } from "@mui/material";

function AddTaskBtn() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
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
