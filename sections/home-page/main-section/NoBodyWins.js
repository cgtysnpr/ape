import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
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
                fontSize: { xs: "17px", md: "1.5rem" },
                fontWeight: 700,
              }}
            >
              United Buy Back
            </Typography>
          </ThemeProvider>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: { xs: "17px", md: "1.5rem" },
              mb: 2,
            }}
          >
            If the Jackpot reaches $100k and no one has won 50% of the Jackpot
            is split three ways: 40% goes to buyback and burn $UAD token 40%
            goes to BUSD rewards 20% is sent to LP receiver to add liquidity The
            other 50% of the $100k will stay in Jackpot for next round. After
            the first United Buy Back we will raise the threshold by $50k the
            next 2 round until it reaches $200k where it will stay and all the
            same rules will apply.
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
      <Box className="diamond2">
        <Image
          data-aos="fade-right"
          data-aos-delay={200}
          data-aos-duration="500"
          src="/images/diamond2.png"
          alt="diamond-2"
          layout="responsive"
          width={345}
          height={190}
        />
      </Box>
      <Box className="monopoly">
        <Image
          data-aos="fade-left"
          data-aos-delay={200}
          data-aos-duration="500"
          src="/images/monopoly2.png"
          alt="monopoly"
          width={462}
          height={296}
        />
      </Box>
    </Box>
  );
};
export default NoBodyWins;
