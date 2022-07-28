import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "200",
  textAlign: "center",
  color: "#000",
  fontFamily: "'Poppins', sans-serif",
}));

export const LogoStyledTypography = styled(StyledTypography)(({ theme }) => ({
  fontSize: "1.7rem",
  fontWeight: "900",
  color: "#000",
  "&:first-letter": {
    color: "#D1094B",
  },
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ fontSize: "0.5rem", marginTop: "15px" }}>
          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            NEW ARRIVALS
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            SHOP
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            COLLECTIONS
          </StyledTypography>

          <LogoStyledTypography
            variant="h6"
            sx={{ flexGrow: 5, textAlign: "center" }}
          >
            ShoOp
          </LogoStyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1, display: "flex" }}>
            <SearchIcon /> SEARCH
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            SIGN IN
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            BAG
          </StyledTypography>
          <FavoriteBorderIcon sx={{ color: "#000" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
