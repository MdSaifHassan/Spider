'use client'

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import footerData from '@module/footer/FooterData';
import FooterDropdown from '@components/Dropdwon/footerDropDown';

const Footer = () => {
  const { contact, links, copyright } = footerData;

  return (
    <Box sx={{
      backgroundColor: '#F5F5F5', padding: "40px 35px 80px 35px", position: 'relative'
    }}>
      <Grid container spacing={2} justifyContent="space-between">
        {/* Logo and Social Icons Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              flexWrap: 'wrap',
              gap: { xs: '10px', sm: '20px' },
              marginBottom: '20px',
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}
            >
              {/* <Image src="/client.png" alt="Logo" width={50} height={50} /> */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: "#34A76C" }}
              >
                Logo
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box
              sx={{
                display: { xs: 'flex', sm: 'none' }, // Show only on small screens
                gap: '10px',
              }}
            >
              {footerData.socials.map((social, index) => (
                <Box
                  key={index}
                  sx={{
                    fontSize: '20px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                    textDecoration: 'none',
                    color: '#4CAF50',
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          {contact.map((line, index) => (
            <Typography
              key={index}
              variant="body2"
              color="textSecondary"
              gutterBottom
            >
              {line}
            </Typography>
          ))}

          {/* Social Icons for larger screens */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' }, // Show only on larger screens
              gap: '10px',
              marginTop: '20px',
            }}
          >
            {footerData.socials.map((social, index) => (
              <Box
                key={index}
                sx={{
                  fontSize: '20px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  textDecoration: 'none',
                  color: '#4CAF50',
                }}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {links.map((section, sectionIndex) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={sectionIndex}
                sx={{ display: { xs: 'block', sm: 'none' } }} // Show dropdowns on small screens
              >
                <FooterDropdown
                  title={section.title}
                  items={section.items}
                  containerSx={{
                    borderBottom: '1px solid #DDD',
                    padding: '10px 0',
                    cursor: 'pointer',
                  }}
                  titleSx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#34A76C',
                  }}
                  collapseSx={{
                    paddingLeft: '10px',
                    marginTop: '5px',
                  }}
                  itemSx={{
                    fontWeight: 'bold',
                    color: '#555',
                    marginBottom: '5px',
                  }}
                />
              </Grid>
            ))}
            {links.map((section, sectionIndex) => (
              <Grid
                item
                xs={4}
                key={sectionIndex}
                sx={{ display: { xs: 'none', sm: 'block' } }} // Show grid on larger screens
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: '8px' }}
                  color="#34A76C"
                >
                  {section.title}
                </Typography>
                {section.items.map((item, itemIndex) => (
                  <Typography
                    key={itemIndex}
                    variant="body2"
                    gutterBottom
                    color="black"
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom Bar */}
      <Box
        sx={{
          backgroundColor: '#34A76C',
          color: '#FFFFFF',
          padding: '16px',
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Typography variant="body2">{copyright}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
