import React from "react";
import Image from "next/image";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CaspianButton from "../Button/Button";
import styles from "./Card.module.scss";


const FeatureCard = ({
    icon,
    showIcon = false,
    children,
    sx = {},
    showTitle = false,
    title = "",
    showDescription = false,
    description = "",
    subdescription = "",
    showButton = false,
    buttonText = "",
    isSelected = false,
    onButtonClick,
    image = null,
    showImage = false,
    imageSx = {},
    variant,
    iconsx,
    additionalButton = null,
}) => {
    return (
        <Card
            className={`${isSelected ? styles.selected : ""}`}
            sx={{ ...sx ,padding:"10px"}}
        >
            <Box  sx={{ flexDirection: "row", display: "flex",padding:"0px",margin:"0px"}} >
                {showIcon && (
                    <Box >
                        <Box sx={{ mr: 2, ...iconsx }}>{icon}</Box>
                    </Box>
                )}
                <Box mr={2}>
                    {showTitle && (
                        <Box>
                            <Typography variant="body1">{title}</Typography>
                        </Box>
                    )}

                    {showDescription && (
                        <Box>
                            <Typography variant="body2" color="textSecondary">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {subdescription}
                            </Typography>
                        </Box>
                    )}
                </Box>



                
                <Stack>
                    {showImage && image && (
                        <Image
                            src={image}
                            alt="Card Image"
                            className={styles.cardImage}
                            style={imageSx}
                            width={85}
                            height={85}
                        />
                    )}
                    {showButton && (
                        <CaspianButton
                            variant={variant}
                            size="medium"
                            title={buttonText}
                            onClick={onButtonClick}
                        />
                    )}
                    {additionalButton && (
                    <Stack>
                        {additionalButton}
                    </Stack>
                )}
                </Stack>


                {children}
            </Box>
        </Card>
    );
};

export default FeatureCard;
