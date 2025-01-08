import React from "react";
import { Box, Card, CardContent } from "@mui/material";

// Card Component
const FeatureCard = ({ image, children, sx = {}, boxSx = {} }) => {
    return (
        <Card
            sx={{
                textAlign: "center",
                p: 2,
                display: "flex",
                flexDirection: "column", 
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                ...sx,
            }}
        >
            <CardContent>
                {/* Image */}
                <Box
                    component="img"
                    src={image}
                    alt="Card-Img"
                    sx={{
                        ...boxSx,
                    }}
                />
                {children}
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
