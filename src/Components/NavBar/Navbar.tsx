import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type NavProps = {
  black?: boolean;
  NumItems?: number;
};
const Child = ({ black, NumItems }: NavProps) => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: black ? "400" : "200",
    color: black ? "#000" : "#fff",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  }));

  const LogoStyledTypography = styled(StyledTypography)(({ theme }) => ({
    fontSize: "1.7rem",
    fontWeight: "900",
    color: black ? "#000" : "#fff",

    flexGrow: 8,
    textAlign: "center",

    fontFamily: "'Inter', sans-serif",
    "&:first-letter": {
      color: "#D1094B",
    },

    "@media (max-width: 700px)": {
      fontSize: "2rem",
    },
  }));

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
            BAG{NumItems}
          </StyledTypography>
          <FavoriteBorderIcon sx={{ color: "#000" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Child;
