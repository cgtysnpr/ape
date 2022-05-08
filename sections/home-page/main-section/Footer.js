import { Box, Container, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
const Footer = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", mt: 10, pb:10 }}>
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image src="/images/logo.png" alt="logo" width={144} height={168} />
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              textAlign: "center",
              width: {xs:"100%",md:"50%"},
              fontSize:'30px',
              mt: 2,
            }}
          >
            Mi habitant sem nulla dolor sed sapien dui donec adipiscing diam fusce viverra nisi neque
          </Typography>
          <Stack direction="row" spacing={2} sx={{mt:2}}>
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
          </Stack>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              textAlign: "center",
              width: {xs:"80%",md:"50%"},
              mt: 2,
              fontSize:'18px'
            }}
          >
           copyright © 2022 domotiica all rights reserved
          </Typography>
        </Box>
      </Container>
      <img
        className="rose6"
        src="/images/rose-8.png"
        alt="rose-6"
        width={499}
        height={494}
      />
      <img
        className="rose7"
        src="/images/rose-10.png"
        alt="rose-7"
        width={363}
        height={360}
      />
    </Box>
  );
};
export default Footer;
