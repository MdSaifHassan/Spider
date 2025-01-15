'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import clientReviews from "@/module/client/data";

const ClientCarousel = () => {
    return (
        <Box
            sx={{
                py: 2,
                px: { xs: 2, sm: 3, md: 2 },
                position: "relative",

            }}
        >
            {/* Section Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "#34A76C",
                    fontSize: { xs: "20px", sm: "30px", md: "36px" },
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
                            px: { xs: 1, md: 2 },
                            py: { xs: 2, md: 4 },
                            border: { xs: "none", md: "1px solid #ddd" },
                            borderRadius: "12px",
                            backgroundColor: "#fff",
                            position: "relative",
                            maxWidth: "100%",
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
                                    top: { xs: "-10px", md: "-20px" },
                                    left: { xs: "-5px", md: "-20px" },
                                    width: { xs: "20px", md: "40px" },
                                    height: { xs: "20px", md: "35px" },
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
                                    bottom: { xs: "-10px", md: "-15px" },
                                    right: { xs: "5px", md: "10px" },
                                    width: { xs: "20px", md: "40px" },
                                    height: { xs: "20px", md: "35px" },
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
