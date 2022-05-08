import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Grid } from "@mui/material";
import CollectionsCards from "../../../components/CollectionsCards";
const cardInformations = [
  {
    image: "images/collections-1.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-2.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-3.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
];
const Collections = () => {
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
    <div id="ARTICLE">
      <Box sx={{position:'relative', width:'100%'}}>
        <Container fixed>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  color: "white",
                  fontSize: "53px",
                  display: { xs: "none", md: "block" },
                }}
              >
                NFT collection
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  color: "white",
                  fontSize: "53px",
                  display: { xs: "block", md: "none" },
                }}
              >
                Articles
              </Typography>
            </ThemeProvider>
            <Box sx={{ width: { xs: "100%", md: "70%" }, mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "white",
                  lineHeight: "45px",
                  fontSize: "30px",
                }}
              >
                Cras posuere ultrices varius odio odio fames rutrum laoreet
                accumsan, aliquam rutrum est, felis odio.
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={4}>
            {cardInformations.map((data, i) => (
              <Grid key={"card" + i} item xs={12} md={4}>
                <CollectionsCards data={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <img
          className="rose9"
          src="/images/rose-9.png"
          alt="rose-9"
          width={502}
          height={497}
        />
      </Box>
    </div>
  );
};
export default Collections;
