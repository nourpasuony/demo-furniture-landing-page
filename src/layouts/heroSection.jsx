import { Box, Typography, Grid } from "@mui/material";
import heroImage from "../assets/Insert Image Here.jpg";

function FurnitureHeroSection() {
  return (
    <Box
      sx={{
        width: "80%",
        mx: "auto",
        my: "50px",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        background: "#fff",
      }}
    >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Text Content */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: "Saira, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.7rem", md: "2.2rem", lg: "2.5rem" },
                  color: "#23262F",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                The Best Furniture
                <br />
                Manufacturer Of Your Choice
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontFamily: "Saira, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.6,
                  maxWidth: 480,
                }}
              >
                Furniture power is a software as services for multipurpose
                business management system, especially for them who are running
                two or more business. Explore the future. Furniture power is a
                software as services.
              </Typography>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={heroImage}
              alt="Living Room"
              sx={{
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
}

export default FurnitureHeroSection;
