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
    <Box sx={{ width: "100%", position: "relative",mt:12 }}>
      <Container fixed sx={{ position: "relative" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image src="/images/gold.png" alt="gold" width={715} height={715} />
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
            <Stack sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
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
                reflections from taxes on every buy/sell. Every time there is a
                buy 2% is reflected back to holders on every sell 4% is
                reflected back to holders in the form of the stable coin Binance
                USD (BUSD)
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
      <Box sx={{display:'flex',justifyContent:'flex-end',pr:5}}>
            <img
        className="diamond2"
        src="/images/diamond2.png"
        alt="diamond2"
        width={406}
        height={254}
      />
      </Box>
    </Box>
  );
};
export default Busd;
