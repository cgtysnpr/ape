import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CollectionsCards = ({ data }) => {
  const { image, title, description } = data;
  return (
    <Card sx={{ maxWidth: 502, backgroundColor: "rgba(255, 255, 255, 0)" }}>
      <CardMedia
        component="img"
        height="482"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{ pt: 1, pl: 0, pr: 0 }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "white",
            fontSize: "26px",
            fontWeight: 700,
            fontStyle: "normal",
            lineHeight: "45px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Poppins", color: "#A7A8B6" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          endIcon={<ArrowForwardIcon />}
          variant="text"
          sx={{
            width: "50%",
            fontFamily: "Bangers",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              whiteSpace: "nowrap",
              borderBottom: "2px solid #FF0000",
            }}
          >
            Learn More
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
export default CollectionsCards;
