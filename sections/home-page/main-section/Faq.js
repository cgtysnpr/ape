import { Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainQuestion from "../../../components/MainQuestion";
import Questions from "../../../components/Questions";
const questionsData = [
    {
        title:'Semper risus sapien mus adipiscing in?'
    },
    {
        title:'Duis duis vitae quam viverra ac?'
    },
    {
        title:'Nec penatibus donec molestie?'
    },
    {
        title:'Urna aenean ridiculus ut suspendisse?'
    },
]
const Faq = () => {
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
    <Box sx={{mt:10}}>
      <Container fixed>
          <Box sx={{width:'100%', display:'flex',justifyContent:'center',gap:1}}>
          <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  sx={{ fontFamily: "Bangers", color: "white" }}
                >
                 Frequently Asked
                </Typography>
               
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  sx={{ fontFamily: "Bangers", color: "#FF0000" }}
                >
                Questions
                </Typography>
              </ThemeProvider>
          </Box>
          <MainQuestion />
          {questionsData.map((data)=>(
            <Questions data={data}/>
          ))}
          
      </Container>
    </Box>
  );
};
export default Faq;
