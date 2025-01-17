import React from "react";
import { Box, Typography } from "@mui/material";
import subscriptionData from "@module/subscription/subscriptionData";
import FeatureCard from "@components/Card/Card";
import CustomTextField from "@components/TextField/Textfield";
import CaspianButton from "@components/Button/Button";

const Subscription = () => {
    const data = subscriptionData[0];

    return (
        <Box
            sx={{
                position: "relative",
                py: { xs: 2, sm: 3, md: 5 },
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            {/* Right Side Grey Background */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    width: { sm: "250px", md: "350px", lg: "400px" },
                    height: "90%",
                    backgroundColor: "#C4C4C4",
                    zIndex: 0,
                    borderRadius: "20px 0 0 20px",
                    display: { xs: "none", sm: "block" }, // Hide on small screens
                }}
            />

            {/* Subscription Card */}
            <FeatureCard
                showImage={true}
                image={data.image}
                sx={{
                    maxWidth: { xs: "100%", md: "100%" }, // Widen the card for larger screens
                    mx: "auto",
                    my: 5,
                    p: { xs: 3, sm: 4, md: 5 }, // Adjust padding for different sizes
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#ffffff",
                    position: "relative",
                    zIndex: 1,
                    overflow: "hidden",
                    textAlign: { xs: "center", sm: "left" },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    justifyContent: "space-between",
                }}
                boxSx={{
                    position: "absolute",
                    right: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: { sm: "150px", md: "220px" },
                    height: { sm: "150px", md: "200px" },
                    display: { xs: "none", sm: "block" },
                }}
            >
                {/* Left Side Content */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", sm: "flex-start" },
                        gap: 2,
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "24px", sm: "28px", md: "32px" },
                            fontWeight: "bold",
                            color: "#34A76C",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        {data.title}
                    </Typography>


                    {/* Description */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#666",
                            lineHeight: 1.6,
                            fontSize: { xs: "14px", sm: "16px" },
                            textAlign: { xs: "center", sm: "left" }, // Added text alignment for responsiveness
                        }}
                    >
                        {data.description}
                    </Typography>


                    {/* Input and Button Section */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                            justifyContent: { xs: "center", sm: "flex-start" },
                        }}
                    >
                        <CustomTextField
                            placeholder="Your email address..."
                            fullWidth={false}
                            sx={{
                                width: { xs: "100%", sm: "300px" },
                                height: "40px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "5px",
                                    borderColor: "#707070",
                                    backgroundColor: "#F2F0F0",
                                    height: "40px",
                                    "& input": {
                                        padding: "10px",
                                    },
                                },
                            }}
                        />
                        <CaspianButton
                            title="Subscribe"
                            variant="primary"
                            size="medium"
                            sx={{
                                backgroundColor: "#34A76C",
                                color: "#ffffff",
                                borderRadius: "5px",
                                padding: "6px 20px",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                            }}
                        />
                    </Box>
                </Box>
            </FeatureCard>
        </Box>
    );
};

export default Subscription;
