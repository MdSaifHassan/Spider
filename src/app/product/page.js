"use client"
import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./product.module.scss";
import PackagesSection from "@/src/module/Product";

const ProductPage = () => {
  return (
    <Box className={styles.ProductPageContainer}>
      <Grid container spacing={4} height={"90vh"}>
        {/* Left Section */}
        <Grid item xs={12} md={4} flexDirection={"column"} margin={"auto"} >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Laptop & Computer services
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            4.80 (7.8 M bookings)
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={8} >
          <Box className={styles.rightSection} flexDirection={"row"}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Steam for spotless clean
            </Typography>
            <Box className={styles.imageContainer}>
              <Image
                src="/download.jpg"
                alt="Cleaning in progress"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Grid>
       
      </Grid>
      <PackagesSection />
    </Box>
  );
};

export default ProductPage;

