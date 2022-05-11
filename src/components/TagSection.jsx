import styled from "@emotion/styled";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { chipsAnimation, textAnimation } from "../animations";

const TagSecStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "30%",
  textAlign: "center",
}));

const selectNumCompletedTodos = createSelector(
  (state) => state.todos.value,
  (todos) => todos.map((todo) => todo.tags)
);

export default function TagSection() {
  const [tags, setTags] = useState([]);

  const storedTags = useSelector(selectNumCompletedTodos);

  useEffect(() => {
    const allTags = [];
    storedTags.forEach(function (childArray) {
      childArray.forEach(function (item) {
        allTags.push(item);
      });
    });
    setTags([...new Set(["ALL", "Complete", "Incomplete", ...allTags])]);
  }, [storedTags]);

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
            onClick={() => console.log(tags)}
            sx={{
              animation: `${chipsAnimation} 0.9s cubic-bezier(0.190, 1.000, 0.220, 1.000) both`,
            }}
          />
        ))}
      </Stack>
    </TagSecStyled>
  );
}
