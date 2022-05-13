import Grid from "@mui/material/Grid";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
const Jackpot = () => {
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
      <Container fixed sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
            md={6}
          >
            <Stack
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="1000"
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              spacing={2}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  sx={{
                    fontFamily: "Bangers",
                    color: "white",
                    fontSize: "53px",
                  }}
                >
                  The Jackpot
                </Typography>
              </ThemeProvider>
              <Typography
                sx={{ fontFamily: "Poppins", color: "white", fontSize: "30px" }}
              >
                How to win, we decided to give $UAD holders another source of
                income the $UAD Jackpot. On every buy, 4% tax is allocated to
                Jackpot on every sell 6% is allocated to the Jackpot. If there
                is no buy over, .1 BNB in the last 10 minutes the last person
                who buys in will win the Jackpot, 10% of all winnings will
                automatically be sent to the burn address.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              data-aos="fade-left"
              data-aos-delay={200}
              data-aos-duration="1000"
              src="/images/jackpot.png"
              alt="Jackpot"
              width={715}
              height={715}
            />
          </Grid>
        </Grid>
      </Container>
      {/* web end */}
      {/* --------------- */}
      {/* mobile start */}
      <Container fixed sx={{ display: { xs: "block", md: "none" } }}>
        <Stack
          sx={{ alignItems: { xs: "center", md: "flex-start" }, mt: 5 }}
          spacing={2}
        >
          <ThemeProvider theme={theme}>
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{ fontFamily: "Bangers", color: "white", fontSize: "50px" }}
            >
              The Jackpot
            </Typography>
          </ThemeProvider>
          <Image
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            src="/images/jackpot.png"
            alt="Jackpot"
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
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            How to win, we decided to give $UAD holders another source of income
            the $UAD Jackpot. On every buy, 4% tax is allocated to Jackpot on
            every sell 6% is allocated to the Jackpot. If there is no buy over,
            .1 BNB in the last 10 minutes the last person who buys in will win
            the Jackpot, 10% of all winnings will automatically be sent to the
            burn address.
          </Typography>
        </Stack>
      </Container>
    </>
  );
};
export default Jackpot;
