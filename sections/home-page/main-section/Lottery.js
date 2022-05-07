import { Container, Typography, Box, Grid, Stack, Button } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Lottery = () => {
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
    <Box sx={{ width: "100%", position: "relative", mb: 30 }}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={6}>
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
                  The Lottery
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
                The UAD protocol will hold a lottery every 12 hours and everyone
                can participate. NFT holders will gain free entries depending on
                the level of NFTs they hold. Non-NFT holders will have to pay a
                fee with the $UAD token to gain entries. The lottery will start
                off with a $1k price floor and the more entries that go in the
                higher the prize will be at the end of 12 hours. Winners of
                lottery drawings will be paid from the Lottery treasury with
                $UAD, we will burn 10% of all winnings. The Lottery Treasury
                will receive positive rebase rewards but there will be no BUSD
                reflections going there.
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
          <Grid item xs={12} md={6}>
            <Image
              src="/images/lottery.png"
              alt="Lottery"
              width={715}
              height={715}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Lottery;
