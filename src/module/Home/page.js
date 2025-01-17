'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import homeData from "@module/home/HomeData";
import Form from "@module/home/Form/form";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { store } from "@utils/store";
import styles from "./HomeSection.module.scss";
import Carousel from "@components/Carousel/Carousel";

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
        <Box className={styles.mainContainer}>
          <Box className={styles.backgroundSection}>
            <Box className={styles.textSection}>
              <Typography variant="h1" className={styles.heading}>
                <span>{homeData.heading}</span> {homeData.subheading}
              </Typography>
              <Typography variant="body1" className={styles.description}>
                {homeData.description}
              </Typography>
            </Box>

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
          </Box>

          <Box className={styles.formContainer}>
            <Form />
          </Box>
        </Box>
      </LocalizationProvider>
    </Provider>
  );
}
