import React from "react";
import { Box, Typography, Grid, Link, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerLinks = [
  {
    title: "Our Products",
    links: ["The Support Suite", "The Sales Suite", "Support", "Guide"],
  },
  {
    title: "Top Features",
    links: [
      "Ticketing System",
      "Knowledge Base",
      "Community Forums",
      "Help Desk Software",
    ],
  },
  {
    title: "Resources",
    links: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"],
  },
  {
    title: "Company",
    links: ["About Us", "Press", "Investors", "Events"],
  },
  {
    title: "Favourite Things",
    links: [
      "For Enterprise",
      "For Startups",
      "For Benchmark",
      "For Small Business",
    ],
  },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "#23262F",
      color: "#fff",
      pt: { xs: 5, md: 7 },
      pb: 3,
      px: { xs: 2, md: 8 },
    }}
  >
    <Box sx={{ maxWidth: 1400, mx: "auto" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Raleway, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0.08px",
            mb: { xs: 1, md: 0 },
            color: "#fff",
          }}
        >
          FurniShop
        </Typography>
        <Box>
          <IconButton sx={{ color: "#fff", mx: 0.5, height: "48px", width: "48px" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff", mx: 0.5, height: "48px", width: "48px" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff", mx: 0.5, height: "48px", width: "48px" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff", mx: 0.5, height: "48px", width: "48px" }}>
            <GitHubIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff", mx: 0.5, height: "48px", width: "48px" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Stack>
      <Box
        sx={{
          borderTop: "2px solid #444",
          my: 4,
        }}
      />
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{ textAlign: { xs: "left", sm: "center", md: "left" } }}
      >
        {footerLinks.map((section) => (
          <Grid item size={{ xs: 6, sm: 6, md: 2 }} key={section.title}>
            <Typography
              sx={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#fff",
                mb: 2,
              }}
            >
              {section.title}
            </Typography>
            {section.links.map((link) => (
              <Typography
                key={link}
                sx={{
                  color: "#e0e0e0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#fff" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          color: "#b0b0b0",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: 0,
          textAlign: "center",
          mt: 5,
        }}
      >
        © NameBrand 2022 - All Rights Reserved
      </Typography>
    </Box>
  </Box>
);

export default Footer;
