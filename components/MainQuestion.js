import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Questions from "./Questions";
const questionsData = [
  {
    title: "Semper risus sapien mus adipiscing in?",
  },
  {
    title: "Duis duis vitae quam viverra ac?",
  },
  {
    title: "Nec penatibus donec molestie?",
  },
  {
    title: "Urna aenean ridiculus ut suspendisse?",
  },
];
const MainQuestion = ({}) => {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#000", borderRadius: "0px!important" }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontFamily: "Bangers", color: "white" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              {"Turpis urna, vivamus adipiscing gravida erat?"}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins", color: "white" }}>
              {
                "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs."
              }
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {questionsData.map((data, i) => (
            <Questions key={"question" + i} index={i} data={data} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MainQuestion;
