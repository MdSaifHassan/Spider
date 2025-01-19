'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import aboutData from '@/src/helpers/aboutData';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const { heading, description, images } = aboutData;

  return (
    <Box
      id="about"
      className={styles.aboutUs}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} className={styles.textSection}>
          <Typography variant="h4" className={styles.heading}>
            {heading}
          </Typography>
          <Typography variant="body1" className={styles.description}>
            {description}
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} className={styles.imageSection}>
          <Box className={styles.imageWrapper}>
            {/* Decorative Circle Top Left */}
            <Image
              src={images.topLeftCircle}
              alt="Top Left Circle"
              className={`${styles.decorativeImage} ${styles.topLeft}`}
              width={96}
              height={96}
            />

            {/* Main Image */}
            <Image
              src={images.main}
              alt="Main Image"
              className={styles.mainImage}
              width={384}
              height={384}
            />

            {/* Decorative Circle Bottom Right */}
            <Image
              src={images.bottomRightCircle}
              alt="Bottom Right Circle"
              className={`${styles.decorativeImage} ${styles.bottomRight}`}
              width={96}
              height={96}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
