import Grid from "@mui/material/Grid";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
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
        <Stack sx={{alignItems:{xs:'center',md:'flex-start'}}} spacing={2}>
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
            sx={{ fontFamily: "Poppins", color: "white",lineHeight:'45px' }}
          >
            $UAD is a rebase token that rewards holders every 3 seconds with a
            sustainable 191,021% APY. No need to connect the wallet to a dApp to
            receive rewards simply buy and hold."
          </Typography>
          <Button
              sx={{
                fontFamily: "Bangers",
                backgroundColor: "#FF0000",
                fontSize: { xs: "15px", md: "24px" },
                lineHeight: "25.54px",
                width:"25%",
              }}
              color="error"
              variant="contained"
            >
              LEARN MORE
            </Button>
        </Stack>
      </Grid>
      <img className="rose1" src="/images/rose-1.png" alt="rose-1" width={419} height={413} />
      <img className="rose2" src="/images/rose-2.png" alt="rose-2" width={502} height={497} />
      <img className="scream" src="/images/scream.png" alt="gorilla" width={396} height={720} />
    </Grid>
    </>
  );
};
export default AutoStaking;
