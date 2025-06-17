import React, { useState } from "react";
import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import userAvatar1 from "../assets/Ellipse 202.jpg";
import userAvatar2 from "../assets/Avater2.jpg";
import livingRoom1 from "../assets/Rectangle 925.jpg";
import livingRoom2 from "../assets/Rectangle2.jpg";

const testimonials = [
  {
    name: "Josh Smith",
    role: "Manager of The New York Times",
    text: "They are have a perfect touch for make something so professional, interest and useful for a lot of people.",
    avatar: userAvatar1,
    image: livingRoom1,
  },
  {
    name: "Emily Johnson",
    role: "Designer at Vogue",
    text: "Absolutely love the quality and the service. Highly recommended for anyone looking for the best.",
    avatar: userAvatar2,
    image: livingRoom2,
  },
  {
    name: "Michael Brown",
    role: "CEO of HomeDeco",
    text: "Professional, creative, and always on time. My go-to for all furniture needs.",
    avatar: userAvatar1,
    image: livingRoom1,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[index];

  return (
    <Box sx={{ background: "#fff", width: "80%", mx: "auto", my:"50px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side*/}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Saira, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2.2rem" },
              color: "#23262F",
              mb: 3,
            }}
          >
            What People Are Saying About Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ width: 48, height: 48, mr: 2 }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Saira, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#23262F",
                  lineHeight: 1,
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  fontFamily: "Saira, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  lineHeight: 1,
                }}
              >
                {testimonial.role}
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#23262F",
              fontFamily: "Saira, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 4,
              mt: 2,
              maxWidth: 480,
              mx: { xs: "auto", md: 0 },
            }}
          >
            “{testimonial.text}”
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                border: "1px solid #D6E4E5",
                bgcolor: "#fff",
                color: "#23262F",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                border: "1px solid #D6E4E5",
                bgcolor: "#155A4A",
                color: "#fff",
                "&:hover": { bgcolor: "#1e7c65" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>
        {/* Right Side */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={testimonial.image}
            alt="Living Room"
            sx={{
              height: "340px",
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
