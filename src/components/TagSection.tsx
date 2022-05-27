import styled from "@emotion/styled";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chipsAnimation, textAnimation } from "../animations";
import { RootState } from "../app/store";
import { changeFilter } from "../features/tagsFilterSlice";

const TagSecStyled = styled(Box)(() => ({
  position: "fixed",
  top: "30%",
  textAlign: "center",
}));

const selectNumCompletedTodos = createSelector(
  (state: RootState) => state.todos.value,
  (todos) => todos.map((todo: { tags: string[] }) => todo.tags)
);

const TagSection: FC = ()=> {
  const [tags, setTags] = useState<string[]>([]);
  const dispatch = useDispatch();

  //retrive data from redux
  const storedTags = useSelector(selectNumCompletedTodos);
  const activeTag = useSelector((state: RootState) => state.tagFilter.value);

  useEffect(() => {
    const allTags: string[] = [];
    storedTags.forEach(function (childArray: string[]) {
      childArray.forEach(function (item: string) {
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
        {tags.map((t: string, i: number) => (
          <Chip
            variant="outlined"
            label={t}
            key={i}
            onClick={() => dispatch(changeFilter(t.toLowerCase()))}
            // color={activeTag === t.toLowerCase() ? "primary" : "secondary"}
            sx={{
              animation: `${chipsAnimation} 0.9s cubic-bezier(0.190, 1.000, 0.220, 1.000) both`,
              borderColor:
                activeTag === t.toLowerCase() ? blue[500] : grey[500],
              color: activeTag === t.toLowerCase() ? blue[500] : grey[500],
            }}
          />
        ))}
      </Stack>
    </TagSecStyled>
  );
}

export default TagSection