import coverImg from "../assets/cover.jpg";
import Header from "./header";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";

const Cover = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "1033px",
        backgroundImage: `url(${coverImg})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "right", sm: "center" },
        boxShadow: "0px -119px 61px -39px #ffffff inset",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgb(255, 255, 255 , 0.1))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, height: "1033px" }}>
        <Header />

        {/* Centered Content */}
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: "70vh",
            textAlign: "center",
            color: "#fff",
            position: "absolute",
            left: "50%",
            bottom: "50%",
            transform: "translate(-50% , 50%)",
          }}
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Saira, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "2.5rem", md: "45px", lg: "52px" },
                lineHeight: "120%",
                letterSpacing: 0,
                textAlign: "center",
                textTransform: "capitalize",
                mb: 2,
              }}
            >
              Creative Home Simplify Your
              <br />
              Furniture
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              mb={6}
              sx={{
                fontFamily: "Saira, sans-serif",
                fontWeight: 400,
                fontSize: {
                  xs: "14px",
                  sm: "1.2rem",
                  md: "1.25rem",
                  lg: "20px",
                },
                lineHeight: "150%",
                letterSpacing: "1%",
                textAlign: "center",
                color: "#e0e0e0",
                width: { xs: "90vw", sm: "80vw", md: "627px" },
                height: { xs: "auto", md: "60px" },
                mx: "auto",
              }}
            >
              Do I have consent to record this meeting gain location,
              root-and-branch, review, nor game plan who’s the goto
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                width: "257px",
                height: "62px",
                borderRadius: "10px",
                background: "rgba(226, 226, 226, 0.4)",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "bold",
                lineHeight: "10px",
                boxShadow: "0 4px 24px rgba(123,47,242,0.2)",
                mb: 4,
                "&:hover": {
                  background: "rgba(226, 226, 226, 0.4)",
                },
              }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>

        {/* Stats Bar */}
        <Paper
          elevation={6}
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "5%",
            transform: "translate(-50% , 25%)",
            borderRadius: "10px",
            px: { xs: 1, sm: 2, md: 4 },
            py: { xs: 1.5, sm: 2, md: 2.5 },
            minWidth: { xs: "80vw", sm: "90vw", md: "70vw" },
            background: "#28777b",
            color: "#fff",
            border: "1.5px solid #3ec6e0",
            overflow: "hidden",
            zIndex: 3,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
        <Grid container direction="row" columnSpacing={{ xs: 0, sm: 0 }} rowSpacing={{ xs: 3, sm: 3 }}>
            {[
              {
                value: "7",
                label: (
                  <>
                    Year
                    <br />
                    Experience
                  </>
                ),
              },
              {
                value: "2",
                label: (
                  <>
                    Opened in
                    <br />
                    the country
                  </>
                ),
              },
              {
                value: "10k+",
                label: (
                  <>
                    Furniture
                    <br />
                    sold
                  </>
                ),
              },
              {
                value: "260+",
                label: (
                  <>
                    Variant
                    <br />
                    Furniture
                  </>
                ),
              },
            ].map((item, idx, arr) => (
              <Grid
                item
                size={{ xs: 6, md: 3, lg: 3 }}
                key={item.value}
                sx={{
                  borderRight: {
                    xs: idx % 2 === 0 ? "1px solid rgb(255, 255, 255)" : "none",
                    md:
                      idx < arr.length - 1
                        ? "1px solid rgb(255, 255, 255)"
                        : "none",
                  },
                  backgroundColor: "#28777b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: { xs: 2, sm: 0 },
                  px: { xs: 0, sm: 0 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Saira, sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.2rem",
                      md: "2.5rem",
                      lg: "40px",
                    },
                    lineHeight: "120%",
                    letterSpacing: 0,
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Saira, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.25rem",
                      lg: "20px",
                    },
                    lineHeight: "130%",
                    letterSpacing: "1%",
                    textAlign: "center",
                    color: "#fff",
                    opacity: 0.9,
                    mb: 0,
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Cover;
