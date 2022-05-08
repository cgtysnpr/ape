import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const HeroSection = ({}) => {
  const theme = createTheme();

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
          backgroundSize:'cover',
          backgroundPosition:'bottom'
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
            <Grid container mt={2} spacing={7}>
              <Grid item xs={12} md={12} sx={{pb:7}}>
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={379}
                  height={441}
                />
              </Grid>
              <Grid item sx={{ display: "flex" }} xs={12} md={12}>
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                    sx={{ fontFamily: "Bangers", color: "white", lineHeight:'42px' }}
                  >
                    United Apes are on a mission to take over DeFi with an
                    innovative and determined team focused on bringing strength
                    and sustainability to the sector
                  </Typography>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Box>
        </Container>

      </Box>
      <img className="gorilla" src="/images/Gorilla.png" alt="gorilla" width={315} height={437} />
    </>
  );
};
export default HeroSection;
