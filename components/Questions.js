import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const Questions = ({ data, index, clickedQuestion, questionId }) => {
  const { title, answer } = data;
  return (
    <div>
      <Accordion
        sx={
          questionId === index
            ? { backgroundColor: "#000", borderRadius: "0px!important", border: "2px solid #fff" }
            : {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "0px!important",
              }
        }
        expanded={questionId !== index? false : true}
        onClick={() => clickedQuestion(index)}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: "Poppins", color: "white" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Poppins", color: "white" }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Questions;
