import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";

export const AppBarStyled = styled(AppBar)((theme) => ({
  backgroundColor: "#fff",
  borderBottom: "1px solid #F3F9FF",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  backgroundColor: "#F3F9FF",
  color: "#565656",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
