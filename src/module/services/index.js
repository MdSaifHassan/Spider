'use client'

import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import servicesData from "@/src/helpers/servicesData";
import FeatureCard from "@/src/components/Card/Card";
import Carousel from "@/src/components/Carousel/Carousel";

const ExploreServices = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            id="services"
            sx={{
                py: 4,
                px: { xs: 2, sm: 3, md: 2 },
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
                        }}
                    >
                        {servicesData.heading}
                    </Typography>
                </Grid>
            </Grid>

            <Carousel
                items={servicesData.items}
                showButtons={!isSmallDevice}
                settings={{
                    dots: isSmallDevice,
                }}
                renderItem={(item) => (
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        {/* Feature Card */}
                        <FeatureCard
                            showImage={true}
                            image={item.image}
                            sx={{
                                width: { xs: 100, sm: 140, md: 160 },
                                height: { xs: 90, sm: 130, md: 150 },
                            }}
                            imageSx={{
                                width: isSmallDevice
                                    ? "65px"
                                    : isMediumDevice
                                        ? "90px"
                                        : "115px",
                                height: isSmallDevice
                                    ? "50px"
                                    : isMediumDevice
                                        ? "65px"
                                        : "80px",
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


