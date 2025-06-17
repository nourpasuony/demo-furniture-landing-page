import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import BannerImage from "../assets/Rectangle 928.png";

const DiscountBanner = () => (
  <Box
    sx={{
      width: "100%",
      height: '490px',
      background: `url(${BannerImage}) left center/cover no-repeat`,
      backgroundPosition: { xs: "left", sm: "left" },
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: { xs: 2, md: 8 },
    }}
  >
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
          fontFamily: "Saira, sans-serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "135%",
          letterSpacing: "0%",
          textAlign: "center",
          textTransform: "capitalize",
          mb: 1,
          color: "#fff",
        }}
      >
        Get more discount Off your order
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
        height="auto"
        spacing={1}
        sx={{
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <TextField
          placeholder="Your email address"
          sx={{
            bgcolor: "#fff",
            borderRadius: { xs: "6px", md: 1 },
            minWidth: { xs: 220, md: 320 },
            height: "auto",
            "& input": {
              height: "100%",
              color: "#23262F",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              boxSizing: "border-box",
            },
            "& fieldset": {
              height: "100%",
              border: "none",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#23262F",
            color: "#fff",
            fontFamily: { xs: "Saira, sans-serif", md: "Inter, sans-serif" },
            fontWeight: { xs: 600, md: 700 },
            fontSize: { xs: "12px", md: "16px" },
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