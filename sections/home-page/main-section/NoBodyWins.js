import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Grid } from "@mui/material";
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
          item
          xs={12}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Image
            data-aos="fade-right"
            data-aos-delay={200}
            data-aos-duration="500"
            src="/images/diamond2.png"
            alt="diamond-2"
            width={345}
            height={190}
          />
        </Box>
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
                textAlign: "center",
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
              textAlign: "center",
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
              textAlign: "center",
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
              textAlign: "center",
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
              textAlign: "center",
            }}
          >
            - 30% goes to BUSD rewards distributed to all holders 🪙
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
    </Box>
  );
};
export default NoBodyWins;
