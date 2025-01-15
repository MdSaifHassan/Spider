'use client'

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import footerData from '@/module/footer/FooterData';
import DropdownComponent from '@/components/Dropdwon/footerDropDown';

const Footer = () => {
  const { contact, links, copyright } = footerData;

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '80px 20px', position: 'relative' }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo and Contact Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', marginBottom: '8px' }}
          >
            Logo
          </Typography>
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
                <DropdownComponent title={section.title} items={section.items}
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
                    marginTop: '10px'
                  }}
                  itemSx={{
                    fontWeight: 'bold',
                    color: '#555',
                    marginBottom: '8px',
                  }}
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


// 'use client';

// import React from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import footerData from '@/module/footer/FooterData';
// import CustomSelect from '@/components/Dropdwon/dropdwon';

// const Footer = () => {
//   const { contact, links, copyright, socials } = footerData;

//   return (
//     <Box sx={{ backgroundColor: '#F5F5F5', padding: '40px 20px', position: 'relative' }}>
//       <Grid container spacing={4} justifyContent="space-between">
//         {/* Logo and Contact Section */}
//         <Grid item xs={12} sm={4}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
//             Logo
//           </Typography>
//           {contact.map((line, index) => (
//             <Typography key={index} variant="body2" color="textSecondary" gutterBottom>
//               {line}
//             </Typography>
//           ))}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: { xs: 'center', sm: 'flex-start' },
//               gap: '10px',
//               marginTop: '20px',
//             }}
//           >
//             {socials.map((social, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   fontSize: '20px',
//                   width: '40px',
//                   height: '40px',
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
//                   textDecoration: 'none',
//                   color: '#4CAF50',
//                 }}
//               >
//                 {social.icon}
//               </Box>
//             ))}
//           </Box>
//         </Grid>

//         {/* Links Section */}
//         <Grid item xs={12} sm={8}>
//           <Grid container spacing={2}>
//             {links.map((section, sectionIndex) => (
//               <Grid
//                 item
//                 xs={12}
//                 key={sectionIndex}
//                 sx={{ display: { xs: 'block', sm: 'none' } }}
//               >
//                 <CustomSelect
//                   placeholder={section.title}
//                   value=""
//                   onChange={() => {}}
//                   options={section.items.map((item) => ({
//                     value: item,
//                     label: item,
//                   }))}
//                   sx={{
//                     formControl: {
//                       width: '100%',
//                       marginBottom: '16px',
//                     },
//                     select: {
//                       backgroundColor: '#FFFFFF',
//                       borderRadius: '8px',
//                       padding: '8px 16px',
//                     },
//                     menuItem: {
//                       color: '#555',
//                     },
//                   }}
//                 />
//               </Grid>
//             ))}
//             {links.map((section, sectionIndex) => (
//               <Grid
//                 item
//                 xs={4}
//                 key={sectionIndex}
//                 sx={{ display: { xs: 'none', sm: 'block' } }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: 'bold', marginBottom: '8px' }}
//                   color="#34A76C"
//                 >
//                   {section.title}
//                 </Typography>
//                 {section.items.map((item, itemIndex) => (
//                   <Typography
//                     key={itemIndex}
//                     variant="body2"
//                     gutterBottom
//                     color="black"
//                   >
//                     {item}
//                   </Typography>
//                 ))}
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Footer Bottom Bar */}
//       <Box
//         sx={{
//           backgroundColor: '#34A76C',
//           color: '#FFFFFF',
//           padding: '16px',
//           textAlign: 'center',
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//         }}
//       >
//         <Typography variant="body2">{copyright}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
