'use client'

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import aboutData from "@/src/helpers/aboutData";

const AboutUs = () => {
  const { heading, description, images } = aboutData;

  return (
    <Box
      sx={{
        py: 2,
        px: { xs: 2, sm: 3, md: 2 },
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              color: "#34A76C", fontWeight: "bold", marginBottom: "20px", fontSize: { xs: "20px", sm: "24px", md: "36px" },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "textSecondary", lineHeight: 1.8, fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            {description}
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          {/* Image Wrapper Box */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "24rem",
              margin: "0 auto",
            }}
          >
            {/* Decorative Circle Top Left */}
            <Box
              component="img"
              src={images.topLeftCircle}
              alt="Top Left Circle"
              sx={{
                position: "absolute",
                top: "-2rem",
                left: "-3rem",
                width: "6rem",
                height: "auto",
                zIndex: 1,
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Main Image */}
            <Box
              component="img"
              src={images.main}
              alt="Main Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "0.5rem",
                boxShadow: "0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.1)",
                zIndex: 2,
              }}
            />

            {/* Decorative Circle Bottom Right */}
            <Box
              component="img"
              src={images.bottomRightCircle}
              alt="Bottom Right Circle"
              sx={{
                position: "absolute",
                bottom: "-2rem",
                right: "-3rem",
                width: "6rem",
                height: "auto",
                zIndex: 1,
                display: { xs: "none", md: "block" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
