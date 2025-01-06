import React from 'react';
import { Box, Grid } from '@mui/material';
import footerData from '@/module/footer/FooterDtata';
import TypographyComponent from '@/components/Typography/Typography';
import DropdownComponent from '@/components/FooterDropDown/DropDown';

const Footer = () => {
  const { contact, links, copyright } = footerData;

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '80px 20px', position: 'relative' }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo and Contact Section */}
        <Grid item xs={12} sm={4}>
          <TypographyComponent
            variant="h6"
            sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            text="Logo"
          />
          {contact.map((line, index) => (
            <TypographyComponent
              key={index}
              variant="body2"
              color="textSecondary"
              gutterBottom
              text={line}
            />
          ))}
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
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
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <DropdownComponent title={section.title} items={section.items} />
              </Grid>
            ))}
            {links.map((section, sectionIndex) => (
              <Grid
                item
                xs={4}
                key={sectionIndex}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <TypographyComponent
                  variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: '8px' }}
                  text={section.title}
                  color="#34A76C"
                />
                {section.items.map((item, itemIndex) => (
                  <TypographyComponent
                    key={itemIndex}
                    variant="body2"
                    gutterBottom
                    text={item}
                    color="black"
                  />
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
        <TypographyComponent variant="body2" text={copyright} />
      </Box>
    </Box>
  );
};

export default Footer;
