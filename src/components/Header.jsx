import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBarStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./headerStyles";
import { DoneOutline } from "@mui/icons-material";

export default function Header() {
  return (
    <Box>
      <AppBarStyled elevation="false" position="static">
        <Toolbar>
          <DoneOutline color="primary" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="primary"
            sx={{
              textDecoration: "italic",
              flexGrow: 1,
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            <i>TODO</i>
          </Typography>
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
