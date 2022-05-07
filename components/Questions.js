import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const Questions = ({ data }) => {
  const { title } = data;
  return (
    <div>
      <Accordion sx={{backgroundColor: "rgba(255, 255, 255, 0.3)",borderRadius:'0px!important' }}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily:"Poppins",color:'white'}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily:"Poppins",color:'white'}}>
            Cras posuere ultrices varius odio odio fames rutrum laoreet
            accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices
            varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est,
            felis odio.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Questions;
