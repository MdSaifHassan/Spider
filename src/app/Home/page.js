'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import homeData from "@/module/home/HomeData";

export default function HomePage() {
  const renderCarouselItem = (item) => (
    <img
      src={item.imageUrl}
      alt={item.alt}
      style={{
        width: "calc(80% + 60px)",
        height: "280px",
        objectFit: "cover",
        borderRadius: "8px",
        margin: "8px",
      }}
    />
  );

  return (
    <Box sx={{ p: 4, mt: 5}}>
      {/* Heading */}
      <Typography variant="h4" sx={{
        fontWeight: "bold", 
        fontSize: { xs: "20px", sm: "24px", md: "36px" },
      }}>
        <span style={{ color: "#34A76C" }}>{homeData.heading}</span> {homeData.subheading}
      </Typography>
      <Typography variant="body1" sx={{
        fontSize: { xs: "14px", sm: "16px" },
      }}>
        {homeData.description}
      </Typography>

      {/* Carousel */}
      <Carousel
        items={homeData.carouselItems}
        renderItem={renderCarouselItem}
        showButtons={false}
        settings={{
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          centerMode: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        }}
      />
    </Box>
  );
}
