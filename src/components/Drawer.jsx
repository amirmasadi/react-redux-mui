import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Button,
  Typography,
  Container,
  Stack,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const Puller = styled(Box)(({ theme }) => ({
  width: 60,
  height: 5,
  backgroundColor: theme.palette.mode === 'light' ? grey[400] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 30px)',
})); 

export default function Drawer({ showDrawer, setShowDrawer }) {
  const [priority, SetPriority] = useState("low");
  const [tags, setTags] = useState(["sag", "cat", "work"]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      onOpen={() => setShowDrawer(true)}
      sx={{ borderTopRightRadius: "30px" }}
    >
      <Container maxWidth="sm">
        <Puller></Puller>
        <Stack spacing={3} alignItems="center" padding={3}>
          <Typography variant="h5" color="primary">
            Add a new Task
          </Typography>
          <TextField
            variant="outlined"
            label="New Task"
            fullWidth
            multiline
            rows="2"
          />
          <ToggleButtonGroup
            value={priority}
            exclusive
            onChange={(e) => SetPriority(e.target.value)}
            fullWidth
            color="info"
          >
            <ToggleButton value={"low"}>Low</ToggleButton>
            <ToggleButton value={"normal"}>Normal</ToggleButton>
            <ToggleButton value={"high"}>High</ToggleButton>
          </ToggleButtonGroup>
          <TextField variant="outlined" label="#Tags" fullWidth size="small" />
          <Stack
            sx={{ width: "100%", transform: "translateY(-15px)" }}
            direction="row"
            justifyContent="start"
            spacing={2}
            flexWrap="wrap"
          >
            {tags.map((t) => (
              <Chip
                label={t}
                onClick={() => console.log("first")}
                onDelete={() => console.log("first")}
              />
            ))}
          </Stack>
          <Button fullWidth variant="contained">
            Add
          </Button>
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
}
