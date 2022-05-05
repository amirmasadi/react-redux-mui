import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Button,
  Typography,
  Container,
  Stack,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";

export default function Drawer({ showDrawer, setShowDrawer }) {
  const [priority, SetPriority] = useState(1);
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      onOpen={() => setShowDrawer(true)}
      sx={{borderTopRightRadius: "30px"}}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center" padding={3}>
          <Typography variant="h4"  color="primary">
            Add a new Task{" "}
          </Typography>
          <TextField
            variant="outlined"
            label="New Task"
            fullWidth
            multiline
            rows="2"
          />
          <ToggleButtonGroup
            color="primary"
            value={priority}
            exclusive
            onChange={(e) => SetPriority(e.target.value)}
          >
            <ToggleButton value={1}>Low</ToggleButton>
            <ToggleButton value={2}>Normal</ToggleButton>
            <ToggleButton value={3}>High</ToggleButton>
          </ToggleButtonGroup>
          <Button variant="contained">Add</Button>
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
}
