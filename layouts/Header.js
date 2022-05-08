import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
const pages = ["HOME", "PRODUCTS", "ARTICLE", "FAQ"];

const Header = ({}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuClicked = () =>{
    
  }
  return (
    <AppBar color="transparent" position="absolute" sx={{ boxShadow: 0, p: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/images/logo.png" alt="Logo" width={173} height={169} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, position:'absolute', right:'-30px' }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#FF0000", width: "100%" }}
            >
              <MenuIcon sx={{ fontSize: 80 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={
                  i === 0
                    ? {
                        fontFamily: "Bangers",
                        my: 2,
                        color: "white",
                        display: "block",
                        fontSize: { xs: "15px", md: "33px" },
                        padding: "-5px",
                        borderBottom: "4px solid #FF0000",
                      }
                    : {
                        fontFamily: "Bangers",
                        my: 2,
                        color: "white",
                        display: "block",
                        fontSize: { xs: "15px", md: "33px" },
                      }
                }
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                fontFamily: "Bangers",
                backgroundColor: "#FF0000",
                fontSize: { xs: "15px", md: "33px" },
                lineHeight: "35.11px",
              }}
              color="error"
              variant="contained"
            >
              Contact Me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
