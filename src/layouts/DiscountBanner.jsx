import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import BannerImage from "../assets/Rectangle 928.png";

const DiscountBanner = () => (
  <Box
    sx={{
      width: "100%",
      height: '490px',
      background: `url(${BannerImage}) left center/cover no-repeat`,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: { xs: 2, md: 8 },
    }}
  >
    {/* Right: Text and form */}
    <Box
      sx={{
        maxWidth: 480,
        ml: { xs: 0, md: 8 },
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        zIndex: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Raleway, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          lineHeight: 1.2,
          mb: 1,
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Get more discount
        <br />
        Off your order
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          mb: 3,
          color: "#e0e0e0",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Join our mailing list
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: { xs: "100%", md: "auto" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <TextField
          placeholder="Your email address"
          variant="outlined"
          size="medium"
          sx={{
            bgcolor: "#fff",
            borderRadius: 1,
            minWidth: 320,
            "& input": {
              color: "#23262F",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
            },
            "& fieldset": {
              border: "none",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#23262F",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: 2,
            boxShadow: "none",
            height: '60px',
            "&:hover": { bgcolor: "#111" },
          }}
        >
          Shop Now
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default DiscountBanner;