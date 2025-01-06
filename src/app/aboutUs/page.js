import React from "react";
import { Box, Grid } from "@mui/material";
import TypographyComponent from "@/components/Typography/Typography";
import aboutData from "@/module/aboutUs/aboutData";

const AboutUs = () => {
  const { heading, description, images } = aboutData;

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px 100px" }, 
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <TypographyComponent
            variant="h4"
            text={heading}
            color="#34A76C"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          />
          <TypographyComponent
            variant="body1"
            text={description}
            color="textSecondary"
            sx={{ lineHeight: 1.8 }}
          />
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
              maxWidth: "25rem", 
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
                top: "-1.5rem", 
                left: "-2.3rem", 
                width: "4.5rem",
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
                bottom: "-1.5rem", 
                right: "-2.3rem", 
                width: "4.5rem",
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
