'use client';

import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import footerData from '@/src/helpers/FooterData';
import FooterDropdown from '@/src/components/Dropdown/footerDropDown';
import styles from './Footer.module.scss';

const Footer = () => {
  const { contact, links, copyright } = footerData;

  return (
    <Box className={styles.footer}>
      <Grid container justifyContent="space-between">
        {/* Logo and Social Icons Section */}
        <Grid item xs={12}>
          <Stack
            direction='row'
            alignItems="center"
            justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
            sx={{ marginBottom: '20px' }}
          >
            {/* Logo */}
            <Box
              className={styles.logo}
              onClick={() => router.push('/')}
            >
              {/* <Image src="/client.png" alt="Logo" width={50} height={50} /> */}
              <Typography variant="h6">
                Logo
              </Typography>
            </Box>

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              {footerData.socials.map((social, index) => (
                <Box key={index} className={styles.socialIcon}>
                  {social.icon}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          <Stack spacing={1}>
            {contact.map((line, index) => (
              <Typography key={index} variant="body2" color="textSecondary" gutterBottom>
                {line}
              </Typography>
            ))}
          </Stack>

          {/* Social Icons for larger screens */}
          <Stack direction="row" spacing={2} className={styles.contact}>
            {footerData.socials.map((social, index) => (
              <Box key={index} sx={{ display: { xs: 'none',  sm: 'flex'} }}
                className={styles.socialIcon}>
                {social.icon}
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={8}>
          <Grid container>
            {links.map((section, sectionIndex) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={sectionIndex}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <FooterDropdown
                  title={section.title}
                  items={section.items}
                  containerSx={{
                    borderBottom: '1px solid #DDD',
                    padding: '10px 0',
                    cursor: 'pointer',
                  }}
                  titleSx={{ fontWeight: 'bold', fontSize: '16px', color: '#34A76C' }}
                  collapseSx={{ paddingLeft: '10px', marginTop: '5px' }}
                  itemSx={{ fontWeight: 'bold', color: '#555', marginBottom: '5px' }}
                />
              </Grid>
            ))}
            {links.map((section, sectionIndex) => (
              <Grid
                item
                xs={4}
                key={sectionIndex}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <Typography variant="h6" className={styles.linkTitle}>
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.items.map((item, itemIndex) => (
                    <Typography key={itemIndex} variant="body2" className={styles.linkItem}>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom Bar */}
      <Box className={styles.footerBar}>
        <Typography variant="body2">{copyright}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;