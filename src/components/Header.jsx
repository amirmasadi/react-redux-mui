import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBarStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  LogoText,
} from "./headerStyles";
import { DoneOutline } from "@mui/icons-material";
import { chipsAnimation } from "../animations";

export default function Header() {
  return (
    <Box>
      <AppBarStyled elevation={0} position="static">
        <Toolbar>
          <DoneOutline
            color="primary"
            sx={{
              animation: `${chipsAnimation} 0.9s cubic-bezier(0.190, 1.000, 0.220, 1.000) both`,
            }}
          />
          <LogoText variant="h6" noWrap component="div" color="primary">
            TODO
          </LogoText>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}
