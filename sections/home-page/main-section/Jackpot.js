import Grid from "@mui/material/Grid";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
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
    <Grid container spacing={2} sx={{mt:5}}>
      <Grid sx={{display:'flex',alignItems:'center'}} item xs={12} md={6}>
        <Stack
          sx={{ alignItems: { xs: "center", md: "flex-start" } }}
          spacing={2}
        >
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Bangers", color: "white" }}
            >
              The Jackpot
            </Typography>
          </ThemeProvider>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ fontFamily: "Poppins", color: "white" }}
          >
            How to win, we decided to give $UAD holders another source of income
            the $UAD Jackpot. On every buy, 4% tax is allocated to Jackpot on
            every sell 6% is allocated to the Jackpot. If there is no buy over,
            .1 BNB in the last 10 minutes the last person who buys in will win
            the Jackpot, 10% of all winnings will automatically be sent to the
            burn address.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src="/images/jackpot.png"
          alt="Jackpot"
          width={715}
          height={715}
        />
      </Grid>
    </Grid>
  );
};
export default Jackpot;
