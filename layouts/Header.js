import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Link from "next/link";
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const pages = ["HOME", "PRODUCTS", "ARTICLE"];
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#000",
    padding: 5,
  },
});
const Header = ({}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <>
            <ScrollLink
              activeClass="active"
              to={text}
              spy={true}
              onClick={toggleDrawer(anchor, false)}
              smooth={true}
              duration={500}
            >
              <ListItem sx={{ mb: 2, mt: 2 }} button>
                <Typography
                  sx={{
                    fontFamily: "Bangers",
                    color: "#FF0000",
                    fontSize: "30px",
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
            </ScrollLink>
          </>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar color="transparent" position="absolute" sx={{ boxShadow: 0, p: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              position: "absolute",
              right: "-30px",
            }}
          >
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("left", true)}
              sx={{ color: "#FF0000", width: "100%" }}
            >
              <MenuIcon sx={{ fontSize: 80 }} />
            </IconButton>
            <React.Fragment>
              <Drawer
                classes={{ paper: classes.paper }}
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </React.Fragment>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              gap: 4,
            }}
          >
            {pages.map((page, i) => (
              <>
                <ScrollLink
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Button
                    data-aos="fade-down"
                    data-aos-delay={i * 100}
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
                </ScrollLink>
              </>
            ))}
          </Box>

          <Box
            data-aos="fade-down"
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
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
              connect wallet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Header;
