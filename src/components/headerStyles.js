import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { textAnimation } from "../animations";

export const AppBarStyled = styled(AppBar)((theme) => ({
  borderBottom: "1px solid #F3F9FF",
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

export const LogoText = styled(Typography)({
  flexGrow: 1,
  fontWeight: "bold",
  display: { xs: "none", sm: "block" },
  animation: `${textAnimation} 0.7s cubic-bezier(0.860, 0.000, 0.070, 1.000) both`,
  fontStyle: "italic",
});
