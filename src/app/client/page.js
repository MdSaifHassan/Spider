'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import clientReviews from "@/module/client/data";

const ClientCarousel = () => {
    return (
        <Box
            sx={{
                py: 4,
                px: { xs: 2, sm: 3, md: 1 },
                maxWidth: "1200px",
                mx: "auto",
            }}
        >
            {/* Section Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "#34A76C",
                    fontSize: { xs: "24px", sm: "30px", md: "36px" },
                    mb: 2,
                }}
            >
                What Our Client Says
            </Typography>

            {/* Carousel */}
            <Carousel
                items={clientReviews}
                renderItem={(item) => (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: { xs: 3, md: 5 },
                            py: { xs: 2, md: 4 },
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            backgroundColor: "#fff",
                            position: "relative",
                            maxWidth: "1200px",
                            mx: "auto",
                        }}
                    >
                        {/* Client Image and Name */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                width: { xs: "100%", md: "25%" },
                                mb: { xs: 2, md: 0 },
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: { xs: 100, md: 150 },
                                    height: { xs: 100, md: 150 },
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    mb: 2,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#333",
                                    fontSize: { xs: "16px", md: "18px" },
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>

                        {/* Review Text with Quotes */}
                        <Box
                            sx={{
                                flex: 1,
                                textAlign: "center",
                                position: "relative",
                                px: { xs: 2, md: 4 },
                            }}
                        >
                            {/* Opening Quote */}
                            <Box
                                component="img"
                                src="/left-quote 1.png"
                                alt="Quote"
                                sx={{
                                    position: "absolute",
                                    top: "-20px",
                                    left: "-20px",
                                    width: "40px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#666",
                                    lineHeight: 1.6,
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                {item.review}
                            </Typography>

                            {/* Closing Quote */}
                            <Box
                                component="img"
                                src="/left-quote 1.png"
                                alt="Closing Quote"
                                sx={{
                                    position: "absolute",
                                    bottom: "-15px",
                                    right: "10px",
                                    width: "40px",
                                    height: "35px",
                                    transform: "rotate(180deg)",
                                }}
                            />
                        </Box>
                    </Box>
                )}
                showButtons={false}
                settings={{
                    dots: true,
                    autoplay: true,
                autoplaySpeed: 3000,
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
