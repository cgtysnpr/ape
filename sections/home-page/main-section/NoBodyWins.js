import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
const NoBodyWins = ({}) => {
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
    <Box sx={{ width: "100%", position: "relative", mt: 15 }}>
      <Container fixed>
        <Box
          data-aos="zoom-in"
          data-aos-delay={200}
          data-aos-duration="1000"
          sx={{ textAlign: "center" }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "white",
                fontSize: "27px",
                fontWeight: 700,
              }}
            >
              If nobody wins:
            </Typography>
          </ThemeProvider>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: "27px",
              mb: 2,
            }}
          >
            The Ticking Time Bomb - If the Jackpot reaches $100k and no one has
            won 50% of the Jackpot is split three ways, 40% goes to buyback and
            burn $UAD token, 40% goes to BUSD rewards, and 20% of the $50k which
            is stored in the Jackpot as $UAD is sent to LP receiver to add
            liquidity. The other 50% will stay in Jackpot for the next round.
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
        </Box>
      </Container>
      <img
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="500"
        className="diamond2"
        src="/images/diamond2.png"
        alt="diamond-2"
        width={345}
        height={190}
      />
      <img
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="500"
        className="monopoly"
        src="/images/monopoly2.png"
        alt="monopoly"
        width={462}
        height={296}
      />
    </Box>
  );
};
export default NoBodyWins;
