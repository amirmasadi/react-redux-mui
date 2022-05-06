import styled from "@emotion/styled";
import { Box, Stack, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { chipsAnimation, textAnimation } from "../animations";

const TagSecStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "30%",
  textAlign: "center",
}));

export default function TagSection() {
  const [tags, setTags] = useState([
    "sag",
    "cat",
    "wsadasdasdork",
    "sag",
    "cat",
    "work",
    "sag",
  ]);

  return (
    <TagSecStyled>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
          animation: `${textAnimation} 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000) both`,
        }}
      >
        Filter by #Tags:
      </Typography>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        gap={1}
      >
        {tags.map((t, i) => (
          <Chip
            variant="outlined"
            label={t}
            key={i}
            onClick={() => console.log("first")}
            sx={{
              animation: `${chipsAnimation} 0.9s cubic-bezier(0.190, 1.000, 0.220, 1.000) both`,
            }}
          />
        ))}
      </Stack>
    </TagSecStyled>
  );
}
