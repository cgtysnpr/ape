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
          sx={{ textAlign: "center", p: 2 }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "white",
                fontSize: { xs: "17px", md: "1.5rem" },
                fontWeight: 700,
                textAlign: "left",
                mb: 3,
              }}
            >
              United Buyback! 🌎 ✊
            </Typography>
          </ThemeProvider>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: { xs: "17px", md: "1.5rem" },
              mb: 3,
              textAlign: "left",
            }}
          >
            If the Jackpot reaches $100k and no one has won 50% of the Jackpot
            is split three ways: 🪓
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: { xs: "17px", md: "1.5rem" },
              mb: 3,
              textAlign: "left",
            }}
          >
            - 35% goes to buyback and burn $UAD token 🔥
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: { xs: "17px", md: "1.5rem" },
              mb: 3,
              textAlign: "left",
            }}
          >
            - 35% is sent to LP receiver to add liquidity 🏛️
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              fontSize: { xs: "17px", md: "1.5rem" },
              mb: 3,
              textAlign: "left",
            }}
          >
            - 30% goes to BUSD rewards distributed to all holders 🪙
          </Typography>
          <Button
            sx={{
              fontFamily: "Bangers",
              backgroundColor: "#FF0000",
              fontSize: { xs: "21px", md: "24px" },
              lineHeight: "25.54px",
              width: { xs: "50%", sm: "17%", md: "17%", lg: "17%" },
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
