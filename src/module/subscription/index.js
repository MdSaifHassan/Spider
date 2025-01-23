import React from "react";
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import subscriptionData from "@/src/helpers/subscriptionData";
import CaspianButton from "@/src/components/Button/Button";
import FeatureCard from "@/src/components/Card/Card";
import CustomTextField from "@/src/components/TextField/Textfield";
import styles from "./Subscription.module.scss"

const Subscription = () => {
    const data = subscriptionData[0];
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            id="contact"
            sx={{
                position: "relative",
                py: { xs: 2, sm: 3, md: 4 },
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            {/* Right Side Grey Background */}
            <Box className={styles.rigtBack}
            />

            {/* Subscription Card */}
            <FeatureCard
                showImage={true}
                image={data.image}
                sx={{
                    my: 4,
                    p: { xs: 3, sm: 4, md: 5 },
                    position: "relative",
                    zIndex: 1,
                    overflow: "hidden",
                    textAlign: { xs: "center", sm: "left" },
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    justifyContent: "space-between",
                    boxShadow: "none !important",
                    "&:hover": {
                        transform: "none !important",
                    },

                }}
                imageSx={{
                    position: "absolute",
                    right: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: isSmallDevice
                        ? "0"
                        : isMediumDevice
                            ? "10rem"
                            : "15rem",
                    height: isMediumDevice ? "10rem" : "14rem",
                    display: { xs: "none", sm: "block" },
                }}
            >
                {/* Left Side Content */}
                <Stack
                    direction="column"
                    spacing={2}
                    className={styles.leftContent}
                >
                    {/* Title */}
                    <Typography
                        variant="h3"
                        className={styles.title}
                    >
                        {data.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body2"
                        className={styles.description}
                    >
                        {data.description}
                    </Typography>

                    {/* Input and Button Section */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: { xs: "center", sm: "flex-start" },
                        }}
                    >
                        <CustomTextField
                            placeholder="Your email address..."
                            fullWidth={false}
                            className={styles.field}
                            sx={{
                                width: { xs: "100%", sm: "300px" },
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "#707070",
                                    backgroundColor: "#F2F0F0",
                                    height: "40px",
                                },
                            }}
                        />
                        <CaspianButton
                            title="Subscribe"
                            variant="custom3"
                            size="medium"
                        />
                    </Stack>
                </Stack>
            </FeatureCard>
        </Box >
    );
};

export default Subscription;
