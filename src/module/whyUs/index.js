'use client'
import React from "react";
import { Box, Grid, useMediaQuery, Typography, useTheme } from "@mui/material";
import data from "@/src/helpers/WhyUsData";
import FeatureCard from "@/src/components/Card/Card";

const WhyUs = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));
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
                width: { xs: 140, sm: 200, md: 220 },
                height: { xs: 120, sm: 155 },
                backgroundColor: "#EEEEEE",
              }}
              imageSx={{
                width: isSmallDevice
                  ? "55px"
                  : isMediumDevice
                    ? "70px"
                    : "80px",
                height: isSmallDevice
                  ? "55px"
                  : isMediumDevice
                    ? "70px"
                    : "80px",
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