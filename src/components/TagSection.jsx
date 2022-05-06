import styled from "@emotion/styled";
import { Box, Stack, Chip, Typography } from "@mui/material";
import { useState } from "react";

const TagSecStyled = styled(Box)(({ theme }) => ({
  // maxWidth:300,
  position: "fixed",
  top: "30%",
  textAlign:"center",
}));

export default function TagSection() {
  const [tags, setTags] = useState(["sag", "cat", "wsadasdasdork","sag", "cat", "work","sag", "cat", "work"]);

  return (
    <TagSecStyled>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Filter by #Tags:
      </Typography>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {tags.map((t, i) => (
          <Chip
          sx={{margin: 1}}
            variant="outlined"
            label={t}
            key={i}
            onClick={() => console.log("first")}
            // color="info"
          />
        ))}
      </Stack>
    </TagSecStyled>
  );
}
