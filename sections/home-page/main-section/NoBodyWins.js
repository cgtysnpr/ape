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
    <Box sx={{ width: "100%", position: "relative", mt:10 }}>
      <Container fixed>
        <Box sx={{ textAlign: "center" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              If nobody wins:
            </Typography>
          </ThemeProvider>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ fontFamily: "Poppins", color: "white", lineHeight: "45px" }}
          >
            The Ticking Time Bomb - If the Jackpot reaches $100k and no one has
            won 50% of the Jackpot is split three ways, 40% goes to buyback and
            burn $UAD token, 40% goes to BUSD rewards, and 20% of the $50k which
            is stored in the Jackpot as $UAD is sent to LP receiver to add
            liquidity. The other 50% will stay in Jackpot for the next round.
          </Typography>
          <Button
            sx={{
              fontFamily: "Bangers",
              backgroundColor: "#FF0000",
              fontSize: { xs: "15px", md: "24px" },
              lineHeight: "25.54px",
              width: { xs: "80%", md: "20%" },
            }}
            color="error"
            variant="contained"
          >
            LEARN MORE
          </Button>
        </Box>
      </Container>
      <img
        className="diamond1"
        src="/images/diamond1.png"
        alt="diamond"
        width={289}
        height={286}
      />
      <img
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
