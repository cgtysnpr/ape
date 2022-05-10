import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  input: {
    color: "white",
  },
});
const HeroSection = (props) => {
  const classes = useStyles();
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "rgba(255, 255, 255,0)",
        darker: "rgba(255, 255, 255,0)",
      },
      neutral: {
        main: "rgba(255, 255, 255,0)",
      },
    },
  });

  theme.typography.h3 = {
    fontSize: "40px",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('images/hero-section.png')",
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Container sx={{ paddingTop: 18 }} fixed>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid container mt={2} spacing={1}>
              <Grid item xs={12} md={12}>
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={379}
                  height={441}
                  data-aos="zoom-in"
                  data-aos-delay={400}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  pb: { xs: 0, md: 7 },
                  ml: 4,
                  pr: 2,
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Stack
                  data-aos="fade-up"
                  data-aos-delay={600}
                  direction="row"
                  spacing={1}
                >
                  <ThemeProvider theme={theme}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      color="primary"
                      placeholder="1500"
                      InputProps={{
                        style: { height: "100%", fontSize: "30px" },
                      }}
                      sx={{
                        width: "70%",
                        backgroundColor: "#000",
                        textColor: "#fff",
                        borderRadius: "10px",
                        border: "1px solid #fff",
                        input: {
                          color: "white",
                        },
                      }}
                    />
                  </ThemeProvider>
                  <Button
                    sx={{
                      backgroundColor: "#000",
                      borderRadius: "10px",
                      fontFamily: "Bangers",
                      fontSize: { xs: "29px", md: "33px" },
                      border: "4px solid #FF0000",
                      width: { xs: "40%", md: "30%" },
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                    variant="contained"
                  >
                    Approve
                  </Button>
                </Stack>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={12}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-delay={800}
                  sx={{ width: { xs: "100%", md: "60%" } }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography
                      sx={{
                        fontFamily: "Bangers",
                        color: "white",
                        lineHeight: "52px",
                        fontSize: "49px",
                      }}
                    >
                      UNITED APES ARE ON A MISSION TO BRING STRENGTH AND
                      STABILITY TO DEFI
                    </Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <img
        data-aos="fade-right"
        data-aos-delay={800}
        className="gorilla"
        src="/images/Gorilla.png"
        alt="gorilla"
        width={315}
        height={437}
      />
    </>
  );
};
HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default HeroSection;
