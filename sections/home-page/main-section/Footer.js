import { Box, Container, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
const Footer = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", mt: 10, pb: 10 }}>
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            data-aos="flip-left"
            data-aos-delay={200}
            data-aos-duration="500"
            src="/images/logo.jpg"
            alt="logo"
            width={144}
            height={168}
          />
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Box
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration="500"
            >
              <FacebookIcon sx={{ color: "white" }} />
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-duration="500"
            >
              <InstagramIcon sx={{ color: "white" }} />
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay={1000}
              data-aos-duration="500"
            >
              <TwitterIcon sx={{ color: "white" }} />
            </Box>
          </Stack>
          <Typography
            data-aos="fade-up"
            data-aos-delay={1200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Poppins",
              color: "white",
              lineHeight: "45px",
              textAlign: "center",
              width: { xs: "80%", md: "50%" },
              mt: 2,
              fontSize: { xs: "15", md: "18px" },
            }}
          >
            copyright © 2022 all rights reserved
          </Typography>
        </Box>
      </Container>
      <img
        className="rose6"
        src="/images/rose-12.png"
        alt="rose-6"
        width={499}
        height={494}
        data-aos="fade-right"
        data-aos-delay={200}
        data-aos-duration="500"
      />
      <img
        data-aos="fade-left"
        data-aos-delay={200}
        data-aos-duration="500"
        className="rose7"
        src="/images/rose-13.png"
        alt="rose-7"
        width={363}
        height={360}
      />
    </Box>
  );
};
export default Footer;
