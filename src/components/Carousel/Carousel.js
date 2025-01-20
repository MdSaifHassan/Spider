import React from "react";
import { Stack, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Dots Component
const CustomDots = ({ dots, slider, dotsClassName }) => (
    <Stack direction="row" justifyContent="center" spacing={1} mt={2} className={dotsClassName}>
        {dots.map((dot, index) => (
            <span
                key={index}
                style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: dot.props.className.includes("slick-active") ? "#000" : "#fff",
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                }}
                onClick={() => slider.slickGoTo(index)}
            />
        ))}
    </Stack>
);

const Carousel = ({
    items,
    renderItem,
    settings = {}, 
    showButtons = true,
    dotsClassName = "",
    arrowStyles = {}, 
}) => {
    const sliderRef = React.useRef(null);

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        appendDots: (dots) => <CustomDots dots={dots} slider={sliderRef.current} dotsClassName={dotsClassName} />,
        responsive: [
            {
                breakpoint: 1025,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 },
            },
        ],
        ...settings,
    };

    const defaultArrowStyles = {
        left: {
            background: "#e0e0e0",
            color: "#333",
            "&:hover": { background: "#d6d6d6" },
        },
        right: {
            background: "#34A76C",
            color: "#fff",
            "&:hover": { background: "#34A75C" },
        },
        ...arrowStyles,
    };

    return (
        <Stack sx={{ position: "relative", py: 2 }}>
            {showButtons && (
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: "absolute",
                        top: -60,
                        right: 10,
                        zIndex: 2,
                    }}
                >
                    {/* Left Arrow */}
                    <IconButton
                        onClick={() => sliderRef.current.slickPrev()}
                        sx={defaultArrowStyles.left}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    {/* Right Arrow */}
                    <IconButton
                        onClick={() => sliderRef.current.slickNext()}
                        sx={defaultArrowStyles.right}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            )}

            {/* Slider */}
            <Slider ref={sliderRef} {...defaultSettings}>
                {items.map((item, index) => (
                    <Stack key={index}>{renderItem(item)}</Stack>
                ))}
            </Slider>
        </Stack>
    );
};

export default Carousel;
