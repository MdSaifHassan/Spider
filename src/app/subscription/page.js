import React from "react";
import { Box } from "@mui/material";
import FeatureCard from "@/components/Card/Card";
import CustomTextField from "@/components/TextField/Textfield";
import CaspianButton from "@/components/Button/Button";
import subscriptionData from "@/module/subscription/subscriptionData";

const Subscription = () => {
    const data = subscriptionData[0]; // Display only the first subscription card

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "900px",
                mx: "auto",
                my: 5,
                p: 3,
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Left Side Content */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                    gap: 3,
                }}
            >
                {/* Title */}
                <Box
                    component="h2"
                    sx={{
                        fontSize: "1.75rem",
                        fontWeight: "bold",
                        color: "#34A76C",
                        mb: 1,
                    }}
                >
                    {data.title}
                </Box>

                {/* Description */}
                <Box
                    component="p"
                    sx={{
                        fontSize: "1rem",
                        color: "#666",
                        mb: 1,
                        lineHeight: 1.6,
                    }}
                >
                    {data.description}
                </Box>

                {/* Input and Button Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <CustomTextField
                        placeholder="Your email address..."
                        fullWidth={false}
                        sx={{
                            width: "300px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "20px",
                                borderColor: "#ddd",
                                backgroundColor: "#fff",
                            },
                        }}
                    />
                    <CaspianButton
                        title="Subscribe"
                        variant="primary"
                        size="medium"
                        style={{
                            backgroundColor: "#34A76C",
                            color: "#ffffff",
                            borderRadius: "20px",
                            padding: "10px 20px",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                        }}
                    />
                </Box>
            </Box>

            {/* Right Side Image */}
            <Box
                sx={{
                    position: "absolute",
                    right: "-50px", // Position the image outside the box
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "200px", // Adjust the image size
                    height: "200px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%", // Circular image container
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Box
                    component="img"
                    src={data.image}
                    alt="Subscription"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Box>
    );
};

export default Subscription;
