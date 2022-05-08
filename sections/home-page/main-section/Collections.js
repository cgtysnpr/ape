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
      <Box>
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
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  fontFamily: "Bangers",
                  color: "white",
                  display: { xs: "none", md: "block" },
                }}
              >
                NFT collection
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  fontFamily: "Bangers",
                  color: "white",
                  display: { xs: "block", md: "none" },
                }}
              >
                Articles
              </Typography>
            </ThemeProvider>
            <Box sx={{ width: { xs: "100%", md: "50%" }, mb: 2 }}>
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
      </Box>
    </div>
  );
};
export default Collections;
