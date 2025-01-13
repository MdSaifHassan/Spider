import React from "react";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomDots = ({ dots, slider }) => (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {dots.map((dot, index) => (
            <Box
                key={index}
                component="span"
                sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: dot.props.className.includes("slick-active")
                        ? "#000"
                        : "#fff",
                    mx: 0.5,
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                }}
                onClick={() => slider.slickGoTo(index)} 
            />
        ))}
    </Box>
);

const Carousel = ({
    items,
    renderItem,
    showButtons = true,
    settings: customSettings,
}) => {
    const sliderRef = React.useRef(null);

    const defaultSettings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        appendDots: (dots) => <CustomDots dots={dots} slider={sliderRef.current} />, 
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 1000,
        ...customSettings,
    };

    return (
        <Box sx={{ position: "relative", py: 2 }}>
            {showButtons && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -60,
                        right: 10,
                        display: "flex",
                        gap: 1,
                        zIndex: 2,
                    }}
                >
                    {/* Left Navigation */}
                    <IconButton
                        onClick={() => sliderRef.current.slickPrev()}
                        sx={{
                            background: "#e0e0e0",
                            color: "#333",
                            "&:hover": { background: "#d6d6d6" },
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    {/* Right Navigation */}
                    <IconButton
                        onClick={() => sliderRef.current.slickNext()}
                        sx={{
                            background: "#34A76C",
                            color: "#fff",
                            "&:hover": { background: "#34A75C" },
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            )}

            {/* Slider */}
            <Slider ref={sliderRef} {...defaultSettings}>
                {items.map((item, index) => (
                    <Box key={index}>{renderItem(item)}</Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
