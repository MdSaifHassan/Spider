import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";

const ReusableCard = ({ 
  headerText, 
  contentText, 
  imageUrl, 
  showHeader = true, 
  showContent = true, 
  showImage = true 
}) => {
  return (
    <Card>
      {showHeader && <CardHeader title={headerText} />}
      {showImage && imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={headerText || "Card image"}
        />
      )}
      {showContent && contentText && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {contentText}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ReusableCard;
