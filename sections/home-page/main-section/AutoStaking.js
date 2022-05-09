import Grid from "@mui/material/Grid";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const AutoStaking = () => {
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
      <Box name="PRODUCTS" sx={{ position: "relative" }}>
        <Container fixed sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container spacing={2}>
            <Grid
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="500"
              item
              xs={12}
              md={6}
            >
              <Image
                src="/images/image-1.png"
                alt="Image-1"
                width={715}
                height={715}
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
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
                spacing={2}
                data-aos="fade-left"
                data-aos-delay={200}
                data-aos-duration="500"
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                    sx={{ fontFamily: "Bangers", color: "white" }}
                  >
                    Auto-Staking
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
                  $UAD is a rebase token that rewards holders every 3 seconds
                  with a sustainable 191,021% APY. No need to connect the wallet
                  to a dApp to receive rewards simply buy and hold."
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
        {/* web end */}
        {/* -------------- */}
        {/* mobile starts */}
        <Container fixed sx={{ display: { xs: "block", md: "none" } }}>
          <Stack
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            spacing={2}
          >
            <ThemeProvider theme={theme}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{ fontFamily: "Bangers", color: "white", fontSize: "53px" }}
              >
                Auto-Staking
              </Typography>
            </ThemeProvider>
            <Image
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              src="/images/image-1.png"
              alt="Image-1"
              width={715}
              height={715}
            />
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Poppins",
                color: "white",
                lineHeight: "30px",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "20px",
              }}
            >
              $UAD is a rebase token that rewards holders every 3 seconds with a
              sustainable 191,021% APY. No need to connect the wallet to a dApp
              to receive rewards simply buy and hold."
            </Typography>
            <Button
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                backgroundColor: "#FF0000",
                fontSize: "24px",
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
        <img
          data-aos="fade-left"
          data-aos-delay={200}
          className="rose1"
          src="/images/rose-10.png"
          alt="rose-1"
          width={419}
          height={413}
        />
        <img
          data-aos="fade-right"
          data-aos-delay={400}
          className="rose8"
          src="/images/rose-11.png"
          alt="rose-8"
          width={388}
          height={422}
        />
      </Box>
    </>
  );
};
export default AutoStaking;
