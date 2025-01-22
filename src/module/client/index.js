'use client';

import React from "react";
import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import clientReviews from "@/src/helpers/data";
import Carousel from "@/src/components/Carousel/Carousel";
import styles from "./ClientCarousel.module.scss";

const ClientCarousel = () => {
    return (
        <Box id="testimonials"
            className={styles["carousel-container"]}>
            {/* Section Heading */}
            <Typography variant="h4" className={styles["carousel-heading"]}>
                What Our Client Says
            </Typography>

            <Carousel
                items={clientReviews}
                renderItem={(item) => (
                    <Stack className={styles["review-card"]} direction={{ xs: "column", md: "row" }} >
                        {/* Client Image and Name */}
                        <Stack className={styles["client-info"]} alignItems="center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={150}
                                height={150}
                                className={styles["client-image"]}
                            />
                            <Typography variant="h6" className={styles["client-name"]}>
                                {item.name}
                            </Typography>
                        </Stack>

                        {/* Review Text with Quotes */}
                        <Stack className={styles["review-text"]} textAlign="center">
                            {/* Opening Quote */}
                            <Image
                                src="/left-quote 1.png"
                                alt="Quote"
                                className={`${styles["quote"]} ${styles["quote-open"]}`}
                                width={40}
                                height={40}
                            />

                            <Typography variant="body1" sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                            }}>{item.review}</Typography>

                            {/* Closing Quote */}
                            <Image
                                src="/left-quote 1.png"
                                alt="Quote"
                                className={`${styles["quote"]} ${styles["quote-close"]}`}
                                width={40}
                                height={40}
                            />
                        </Stack>
                    </Stack>
                )}
                showButtons={false}
                settings={{
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                }}
            />
        </Box>
    );
};

export default ClientCarousel;
