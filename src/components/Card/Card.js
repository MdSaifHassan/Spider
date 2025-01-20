import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CaspianButton from "../Button/Button";

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
  boxSx = {},
  variant,
  iconsx,
  additionalButton = null,
}) => {
  return (
    <Card
      sx={{
        textAlign: "left",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
        border: isSelected ? "2px solid #00AEEF" : "1px solid #ccc",
        borderRadius: 2,
        boxShadow: isSelected ? "0 4px 8px rgba(0, 174, 239, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
        ...sx,
      }}
    >
      <CardContent sx={{ flexDirection: "row", display: "flex" }}>
        {showImage && image && (
          <Box
            component="img"
            src={image}
            alt="Card-Img"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...boxSx,
            }}
          />
        )}

        {showIcon && (
          <Box mb={2} >
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
            <Stack mt={2} display={"flex"} flexDirection={"row"} gap={2}>
              <CaspianButton
                variant={variant}
                size="medium"
                title={buttonText}
                onClick={onButtonClick}
              />
              {additionalButton && (
                <Stack>
                  {additionalButton}
                </Stack>
              )}
            </Stack>
          )}
        </Box>

        {children}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
