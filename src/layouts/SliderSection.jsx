import React, { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, Grid } from "@mui/material";

import BedImage from "../assets/lui-peng-8NxTrV6i4WQ-unsplash 1.png";
import ChairImage from "../assets/erik-mclean-Ij9nIghkI6k-unsplash.jpg";
import CupboardImage from "../assets/sanibell-bv-g01h0WtY22s-unsplash.jpg";
import LightingImage from "../assets/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg";

const SliderSection = () => {
  const [items] = useState([
    { title: "Bed", img: BedImage },
    { title: "Chair", img: ChairImage },
    { title: "Cupboard", img: CupboardImage },
    { title: "Lighting", img: LightingImage },
    { title: "Lighting", img: LightingImage },
  ]);

  return (
    // py={4} pl={{ xs: 5, md: 14 }}
    <Box sx={{ width: "90%", ml: "auto", my:"50px"}}>
      <Grid container spacing={1}>
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 3, lg: 3 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              color: "#000",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Saira, sans-serif",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "130%",
                letterSpacing: "0%",
                textTransform: "capitalize",
              }}
            >
              New In <br /> Store Now
            </Typography>
            <Typography variant="body2" mt={2}>
              Get the latest items immediately <br /> with promotions.
            </Typography>
            <Button
              sx={{
                color: "#23262F",
                mt: 2,
                textTransform: "none",
                fontFamily: "Saira, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "160%",
                letterSpacing: "1%",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                textDecorationOffset: "0%",
                textDecorationThickness: "0%",
              }}
              endIcon={
                <span style={{ fontSize: "18px", marginLeft: 4 }}>&rarr;</span>
              }
            >
              Check all
            </Button>
          </Box>
        </Grid>

        {/* Slider Section */}
        <Grid item sx={{ overflowX: "hidden" }} size={{ xs: 12, md: 9, lg: 9 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {items.map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  minWidth: 200,
                  height: 260,
                  position: "relative",
                  borderRadius: 2,
                  flex: "0 0 auto",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  width="100%"
                  image={item.img}
                  alt={item.title}
                  sx={{ objectFit: "cover", borderRadius: 2 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#fff",
                    background: "rgba(0,0,0,0.4)",
                    px: 1,
                    borderRadius: 1,
                  }}
                >
                  {item.title}
                </Typography>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderSection;
