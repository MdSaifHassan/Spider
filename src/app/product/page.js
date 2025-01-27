"use client";
import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./product.module.scss";
import PackagesSection from "@/src/module/Product";

const ProductPage = () => {
  return (
    <Box className={styles.ProductPageContainer}>
      <Grid item xs={12} md={8} className={styles.gridContainer}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Laptop & Computer Services
        </Typography>
        <Box className={styles.rightSection}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Steam for Spotless Clean
          </Typography>
          <Box className={styles.imageContainer}>
            <Image
              src="/Rectangle 4.png"
              alt="Cleaning in progress"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Grid>
      <PackagesSection />
    </Box>
  );
};

export default ProductPage;
