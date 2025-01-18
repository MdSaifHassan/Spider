"use client";

import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import servicesData from "@/src/helpers/servicesData";
import FeatureCard from "@/src/components/Card/Card";
import Carousel from "@/src/components/Carousel/Carousel";

const ExploreServices = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Stack
            id="services" 
            spacing={3}
            sx={{
                py: 4,
                px: { xs: 2, sm: 3, md: 2 },
            }}
        >

            {/* Title */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "#34A76C",
                    fontSize: { xs: "20px", sm: "24px", md: "36px" },
                    textAlign: isMediumDevice ? "left" : "left",
                }}
            >
                {servicesData.heading}
            </Typography>

            {/* Carousel */}
            <Carousel
                items={servicesData.items}
                showButtons={!isSmallDevice}
                settings={{ dots: isSmallDevice }}
                renderItem={(item) => (
                    <Stack alignItems="center" spacing={2}>
                        {/* Feature Card */}
                        <FeatureCard
                            showImage
                            image={item.image}
                            sx={{
                                width: { xs: 100, sm: 150, md: 170 },
                                height: { xs: 90, sm: 130, md: 160 },
                            }}
                            boxSx={{
                                width: { xs: 60, sm: 80, md: 110 },
                                height: { xs: 40, sm: 60, md: 80 },
                            }}
                        />
                        {/* Title */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000",
                                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Stack>
                )}
            />
        </Stack>
    );
};

export default ExploreServices;
