

'use client'
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FeatureCard from "@/components/Card/Card";
import data from "@/module/whyUs/WhyUsData";

const WhyUs = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: { xs: 2, sm: 3, md: 2 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: "bold",
          color: "#34A76C",
          fontSize: { xs: "20px", sm: "24px", md: "36px" },
        }}
      >
        {data.heading}
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 8 }}
        justifyContent="center"
      >
        {data.items.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            key={index}
            sx={{ textAlign: "center" }}
          >
            <FeatureCard
              showImage={true} 
              image={item.image}
              sx={{
                width: { xs: 160, sm: 220, md: 220 },
                height: { xs: 140, sm: 155 },
                boxShadow: 2,
                backgroundColor: "#EEEEEE",
                borderRadius: "10px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              boxSx={{
                width: { xs: 55, sm: 65, md: 75 },
                height: { xs: 50, sm: 60, md: 70 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 2,
                color: "#000",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
