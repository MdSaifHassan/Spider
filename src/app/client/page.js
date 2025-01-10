'use client'

import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import clientReviews from "@/module/client/data";

const ClientCarousel = () => {
    return (
        <Box sx={{
            py: 4,
            px: { xs: 2, sm: 3, md: 4 },
        }}>
            {/* Section Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "#34A76C",
                    fontSize: { xs: "20px", sm: "24px", md: "36px" },
                    textAlign: "left",
                    mb: 1,
                }}
            >
                What Our Client Says
            </Typography>

            {/* Carousel with one card per slide */}
            <Carousel
                items={clientReviews}
                renderItem={(item) => (
                    <Box
                        sx={{
                            height: 300,
                            mx: "auto",
                            border: "1px solid #ddd",
                            backgroundColor: "#fff",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: "12px",
                            padding: 3,
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            flexDirection: { xs: "column", md: "row" }, 
                        }}
                    >
                        {/* Logo and Name */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: { xs: "center", md: "flex-start" },
                                flexDirection: { xs: "column", md: "column" }, 
                                mb: { xs: 1, md: 0 }, 
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#333",
                                    textAlign: { xs: "center", md: "left" }, 
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>

                        {/* Quoted Image and Review */}
                        <Box sx={{ flex: 2, position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Box
                                component="img"
                                src="/left-quote 1.png" 
                                alt="Quote"
                                sx={{
                                    position: "absolute",
                                    top: "-2rem",
                                    left: "-3rem",
                                    width: "4.4rem",
                                    height: "3.9rem",
                                }}
                            />

                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "center",
                                    color: "#666",
                                    lineHeight: 1.6,
                                    mt: 1,
                                }}
                            >
                                {item.review}
                            </Typography>

                            <Box
                                component="img"
                                src="/left-quote 1.png" 
                                alt="Closing Quote"
                                sx={{
                                    position: "absolute",
                                    bottom: "-3rem",
                                    right: "0rem",
                                    width: "4.4rem",
                                    height: "3.9rem",
                                    transform: "rotate(180deg)",
                                }}
                            />
                        </Box>
                    </Box>
                )}
                showButtons={false}
                settings={{
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
