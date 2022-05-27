import { FC } from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// @ts-ignore
import { AppBarStyled, LogoText } from "./headerStyles";
import { DoneOutline } from "@mui/icons-material";
import { chipsAnimation, slideDownAnimation } from "../animations";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { changeTheme } from "../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { RootState } from "../app/store";

const ThemeToggle: FC = () => {
  const dispatch = useDispatch();
  const storedTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <Button
      sx={{ animation: `${slideDownAnimation} 0.5s both` }}
      onClick={() => {
        if (storedTheme === "light") {
          dispatch(changeTheme("dark"));
        } else {
          dispatch(changeTheme("light"));
        }
      }}
    >
      {storedTheme === "light" ? (
        <Brightness4Icon color="primary" sx={{ marginRight: 1 }} />
      ) : (
        <BrightnessHighIcon color="primary" sx={{ marginRight: 1 }} />
      )}
      <Typography
        color="primary"
        variant="button"
        sx={{ textTransform: "capitalize" }}
      >
        {storedTheme} theme
      </Typography>
    </Button>
  );
};

const Header = () => {
  const muiTheme = useTheme();
  return (
    <AppBarStyled
      elevation={0}
      position="static"
      sx={{ backgroundColor: muiTheme.palette.background.default }}
    >
      <Toolbar>
        <DoneOutline
          color="primary"
          sx={{
            animation: `${chipsAnimation} 0.9s cubic-bezier(0.190, 1.000, 0.220, 1.000) both`,
          }}
        />
        <LogoText variant="h6" noWrap color="primary">
          TODO
        </LogoText>
        {<ThemeToggle />}
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
