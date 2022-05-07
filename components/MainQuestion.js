import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const MainQuestion = ({}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#000",
        border: "2px solid #fff",
        p: 2,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'

      }}
    >
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontFamily: "Bangers", color: "white" }}
        >
          Turpis urna, vivamus adipiscing gravida erat?
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          sx={{
            fontFamily: "Poppins",
            color: "white",
            lineHeight: "45px",
          }}
        >
          Blockchain will reshape Your industry and the whole economy. Be
          prepared. Here a collection of our FAQs.
        </Typography>
      </Box>
      <KeyboardArrowUpIcon sx={{color:'white'}}/>
    </Box>
  );
};
export default MainQuestion;
