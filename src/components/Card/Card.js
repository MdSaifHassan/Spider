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
  cardDirection = "row", 
  cardAlignItems = "flex-start", 
  cardJustifyContent = "flex-start", 
  btnPOsitionRight,
  btnPOsitionLeft,
  btnPOsitionTop,
  btnPOsitionBottom,
  btnWidth,
  btnPosition="absolute"
}) => {
  return (
    <Card
      className={`${styles.featureCard} ${isSelected ? styles.selected : ""}`}
      sx={{ ...sx ,position:"relative"}}
      
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: cardDirection,
          alignItems: cardAlignItems,
          justifyContent: cardJustifyContent,
          padding:"0px !important"
        }}
      >
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

        {showIcon && (
          <Box mb={2}>
            <Box sx={{ mr: 2, ...iconsx }}>{icon}</Box>
          </Box>
        )}

        <Box>
          {showTitle && (
            <Box mb={2}>
              <Typography variant="h6">{title}</Typography>
            </Box>
          )}

          {showDescription && (
            <Box mb={2}>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Box>
          )}

          {showButton && (
            <Stack mt={2} display={"flex"} gap={2}
            sx={{
              width:btnWidth,
             alignSelf:"end",
             position:btnPosition,
             right:btnPOsitionRight,
             left:btnPOsitionLeft,
             top:btnPOsitionTop,
             bottom:btnPOsitionBottom,
            }}
            >
              <CaspianButton
                variant={variant}
                size="medium"
                title={buttonText}
                onClick={onButtonClick}
              />
            </Stack>
          )}
          {additionalButton && (
            <Stack
            sx={{
              alignSelf:"end",
              position:btnPosition,
              right:btnPOsitionRight,
              left:btnPOsitionLeft,
              top:btnPOsitionTop,
              bottom:btnPOsitionBottom,
             }}
            >
              {additionalButton}
            </Stack>
          )}
        </Box>

        {children}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
