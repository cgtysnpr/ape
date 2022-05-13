import { Container, Grid, Typography, Stack, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
const Busd = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };
  return (
    <>
      {/* web start */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: 12,
          display: { xs: "none", md: "block" },
        }}
      >
        <Container fixed sx={{ position: "relative" }}>
          <Grid container spacing={5}>
            <Grid
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="1000"
              item
              xs={12}
              md={6}
            >
              <Image
                src="/images/gold.png"
                alt="gold"
                width={547}
                height={547}
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              xs={12}
              md={6}
            >
              <Stack
                data-aos="fade-left"
                data-aos-delay={200}
                data-aos-duration="1000"
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                    sx={{ fontFamily: "Bangers", color: "white" }}
                  >
                    BUSD reflections
                  </Typography>
                </ThemeProvider>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Poppins",
                    color: "white",
                    lineHeight: "45px",
                  }}
                >
                  $UAD is a reflection coin that rewards holders with BUSD
                  reflections from taxes on every buy/sell. Every time there is
                  a buy 2% is reflected back to holders on every sell 4% is
                  reflected back to holders in the form of the stable coin
                  Binance USD (BUSD)
                </Typography>
                <Button
                  sx={{
                    fontFamily: "Bangers",
                    backgroundColor: "#FF0000",
                    fontSize: { xs: "15px", md: "24px" },
                    lineHeight: "25.54px",
                    width: { xs: "80%", md: "30%" },
                  }}
                  color="error"
                  variant="contained"
                >
                  LEARN MORE
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* web end */}
      {/* ----------- */}
      {/* mobile start */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: 12,
          display: { xs: "block", md: "none" },
        }}
      >
        <Container fixed sx={{ position: "relative" }}>
          <Stack sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
            <ThemeProvider theme={theme}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{ fontFamily: "Bangers", color: "white", fontSize: "50px" }}
              >
                BUSD reflections
              </Typography>
            </ThemeProvider>
            <Image
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              src="/images/gold.png"
              alt="gold"
              width={547}
              height={547}
            />
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "white",
                lineHeight: "45px",
                textAlign: "center",
                fontSize: "17px",
              }}
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
            >
              $UAD is a reflection coin that rewards holders with BUSD
              reflections from taxes on every buy/sell. Every time there is a
              buy 2% is reflected back to holders on every sell 4% is reflected
              back to holders in the form of the stable coin Binance USD (BUSD)
            </Typography>
            <Button
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                backgroundColor: "#FF0000",
                fontSize: "21px",
                lineHeight: "25.54px",
                padding: "10px",
                width: { xs: "50%", md: "30%" },
              }}
              color="error"
              variant="contained"
            >
              LEARN MORE
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default Busd;
