'use client';

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import homeData from "@/src/helpers/HomeData";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { store } from "@/src/utils/store";
import styles from "./HomeSection.module.scss";
import Carousel from "@/src/components/Carousel/Carousel";
import Form from "./Form/form";

export default function HomeSection() {
  const renderCarouselItem = (item) => (
    <img
      src={item.imageUrl}
      alt={item.alt}
      className={styles.carouselItem}
    />
  );

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          id="home"
          className={styles.mainContainer}
          direction="column"
        >
          {/* Background and Text Section */}
          <Stack className={styles.backgroundSection} direction="column">
            {/* Text Section */}
            <Stack className={styles.textSection} direction="column">
              <Typography variant="h1" className={styles.heading}>
                <span>{homeData.heading}</span> {homeData.subheading}
              </Typography>
              <Typography variant="body1" className={styles.description}>
                {homeData.description}
              </Typography>
            </Stack>

            {/* Carousel Section */}
            <Box className={styles.carouselSection}>
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
                        slidesToShow: 2,
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
          </Stack>

          {/* Form Section */}
          <Box className={styles.formContainer}>
            <Form />
          </Box>
        </Stack>
      </LocalizationProvider>
    </Provider>
  );
}
