import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ceilingLight from "../assets/llight-1.jpg";
import woodChair from "../assets/llight-2.jpg";
import papperCupboard from "../assets/llight-3.png";
import oleGundorse from "../assets/llight-4.jpg";
import treosSeroes from "../assets/llight-5.jpg";
import multiBilderman from "../assets/llight-6.jpg";
import xoraCornerDesk from "../assets/llight-7.jpg";
import blackForest from "../assets/llight-8.png";

const products = [
  { title: "Ceiling Light", price: "$75.00", oldPrice: "$95.00", image: ceilingLight },
  { title: "Wood Chair", price: "$65.00", oldPrice: "$80.00", image: woodChair },
  { title: "Papper Cupboard", price: "$120.00", oldPrice: "$150.00", image: papperCupboard },
  { title: "Ole Gundorse Spring...", price: "$180.00", oldPrice: "$210.00", image: oleGundorse },
  { title: "Treos Seroes 911", price: "$200.00", oldPrice: "$210.00", image: treosSeroes },
  { title: "Multi Bilderman Silber...", price: "$45.00", oldPrice: "$60.00", image: multiBilderman },
  { title: "XORA Corner Desk", price: "$320.00", oldPrice: "$350.00", image: xoraCornerDesk },
  { title: "Black Forest Series Wo...", price: "$150.00", oldPrice: "$180.00", image: blackForest },
];

const PRODUCTS_PER_PAGE = 8;
const PAGINATION_COUNT = 5;

const ProductGridSection = () => {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ background: "#fff",width: "80%", mx: "auto", my:"50px" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontFamily: "Saira, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          color: "#23262F",
          mb: 1,
        }}
      >
        All Product
      </Typography>
      <Typography
        align="center"
        sx={{
          color: "#888",
          fontFamily: "Saira, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        The products we provide only for you as our service are selected from the
        best products with number 1 quality in the world.
      </Typography>
      <Grid container spacing={5}>
        {products.map((product, idx) => (
          <Grid item size={{sm:12 , md:3 , lg:3}} sx={{width: "100%",}} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s",
                boxShadow: "0",
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%", mb: 2 }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    objectFit: "contain",
                  }}
                />
                <CardActions
                  sx={{ position: "absolute", bottom: "3px", right: "3px" }}
                >
                  <IconButton
                    sx={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "#ddd",
                      color: "#23262F",
                      "&:hover": { backgroundColor: "#f0f0f0" },
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </CardActions>
              </Box>
              <CardContent sx={{ textAlign: "left", width: "100%", p: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Saira, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#23262F",
                    mb: 0.5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#23262F",
                      fontFamily: "Saira, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b0b0b0",
                      fontFamily: "Saira, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.95rem",
                      textDecoration: "line-through",
                    }}
                  >
                    {product.oldPrice}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Custom Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          gap: 2,
        }}
      >
        <IconButton
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          sx={{
            borderRadius: 2,
            border: "none",
            bgcolor: "transparent",
            width: 40,
            height: 40,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#b0b0b0" }} />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {[...Array(PAGINATION_COUNT)].map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i + 1)}
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: "1.5px solid #b0b0b0",
                mx: 0.5,
                cursor: "pointer",
                background: page === i + 1 ? "#23262F" : "#fff",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {page === i + 1 && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#23262F",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={() => setPage((p) => Math.min(PAGINATION_COUNT, p + 1))}
          disabled={page === PAGINATION_COUNT}
          sx={{
            borderRadius: 2,
            border: "none",
            bgcolor: "transparent",
            width: 40,
            height: 40,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "#23262F" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductGridSection;
