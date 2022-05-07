import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Questions = ({data}) => {
    const {title} = data;
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
          sx={{ fontFamily: "Poppins", color: "white" }}
        >
          {title}
        </Typography>
      </Box>
      <ArrowForwardIosIcon sx={{color:'white'}}/>
    </Box>
  );
};
export default Questions;
