import Box from "@mui/material/Box";
import AutoStaking from "./main-section/AutoStaking";
import Container from "@mui/material/Container";
import Jackpot from "./main-section/Jackpot";
const MainSection = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100%",
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('images/background.png')",
            position:"relative",
            overflow:"hidden",
        }}
      >
        <Container fixed>
          <Box sx={{ pt: 10}}>
            <AutoStaking />
            <Jackpot/>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default MainSection;
