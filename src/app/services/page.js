'use client'

import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import FeatureCard from "@/components/Card/Card";
import servicesData from "@/module/services/servicesData";

const ExploreServices = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                py: 4,
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            {/* Title and Slider Buttons */}
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    mb: 3,
                }}
            >
                {/* Heading */}
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "#34A76C",
                            fontSize: { xs: "20px", sm: "24px", md: "36px" },
                            textAlign: isMediumDevice ? "center" : "left", 
                        }}
                    >
                        {servicesData.heading} 
                    </Typography>
                </Grid>
            </Grid>

            {/* Carousel */}
            <Carousel
                items={servicesData.items} 
                showButtons={!isSmallDevice} 
                settings={{
                    dots: isSmallDevice,
                }}
                renderItem={(item) => (
                    <Box sx={{ textAlign: "center" }}>
                        {/* Feature Card */}
                        <FeatureCard
                            image={item.image}
                            sx={{
                                width: { xs: 100, sm: 140, md: 160 }, 
                                height: { xs: 90, sm: 130, md: 150 }, 
                                boxShadow: 2,
                                borderRadius: "10px",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                            boxSx={{
                                width: { xs: 60, sm: 80, md: 100 }, 
                                height: { xs: 40, sm: 60, md: 70 }, 
                            }}
                        />

                        {/* Card Text */}
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: "#000",
                                fontSize: { xs: "12px", sm: "14px", md: "16px" }, 
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                )}
            />
        </Box>
    );
};

export default ExploreServices;
