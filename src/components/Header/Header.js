// 'use client';

// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import navLinks from './NavLinks';
// import Image from 'next/image';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import CaspianButton from '@/components/Button/Button'; // Import CaspianButton
// import { CgMenuRight } from "react-icons/cg";
// import LoginModal from '@/app/Login/page'; // Adjust import if needed
// import SignUpModal from '@/app/SignUp/page'; // Adjust import if needed
// import { Provider } from "react-redux";
// import { store } from "../../utils/store";



// const Header = () => {
//   const router = useRouter();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <Provider store={store}>

//         <AppBar
//           position="fixed"
//           color="transparent"
//           sx={{
//             boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 0,
//             transition: 'box-shadow 0.3s ease-in-out',
//             background: '#ffffff',
//           }}
//         >
//           <Box sx={{ padding: '0 5px' }}>
//             <Toolbar
//               sx={{
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               {/* Logo */}
//               <Box
//                 sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
//                 onClick={() => router.push('/')}
//               >
//                 {/* <Image src="/client.png" alt="Logo" width={50} height={50} /> */}
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: 'bold', color: "#34A76C" }}
//                 >
//                   Logo
//                 </Typography>
//               </Box>

//               {/* Desktop Links */}
//               <Box
//                 sx={{
//                   display: { xs: 'none', md: 'flex' },
//                   alignItems: 'center',
//                   gap: 3,
//                 }}
//               >
//                 {navLinks.map((link, index) => (
//                   <Link
//                     key={index}
//                     href={link.path}
//                     style={{
//                       textDecoration: 'none',
//                       color: index === 0 ? '#34A76C' : '#A0A0A0',
//                       fontWeight: index === 0 ? 'bold' : 'normal',
//                       fontSize: '16px',
//                       borderBottom: index === 0 ? '2px solid #000000' : 'none',
//                     }}
//                   >
//                     {link.title}
//                   </Link>
//                 ))}
//                 {/* Action Buttons */}
//                 <CaspianButton
//                   variant="tertiary"
//                   size="medium"
//                   style={{
//                     border: '1px solid #34A76C',
//                     color: '#34A76C',
//                     borderRadius: '5px',
//                     padding: '5px 20px',
//                   }}
//                   onClick={() => setIsLoginOpen(true)} // Open Login Modal
//                 >
//                   Log in
//                 </CaspianButton>
//                 <CaspianButton
//                   variant="primary"
//                   size="medium"
//                   style={{
//                     backgroundColor: '#34A76C',
//                     color: '#ffffff',
//                     borderRadius: '5px',
//                     padding: '5px 20px',
//                   }}
//                   onClick={() => setIsSignUpOpen(true)} // Open Sign Up Modal
//                 >
//                   Sign Up
//                 </CaspianButton>
//               </Box>

//               {/* Mobile Menu Icon */}
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ display: { xs: 'flex', md: 'none' } }}
//                 onClick={toggleDrawer(true)}
//               >
//                 <CgMenuRight />
//               </IconButton>
//             </Toolbar>
//           </Box>

//           {/* Mobile Action Buttons */}
//           <Box
//             sx={{
//               display: { xs: 'flex', md: 'none' },
//               justifyContent: 'end',
//               gap: 2,
//               padding: '5px 10px',
//               background: '#ffffff',
//             }}
//           >
//             <CaspianButton
//               variant="tertiary"
//               size="medium"
//               style={{
//                 border: '1px solid #34A76C',
//                 color: '#34A76C',
//                 borderRadius: '5px',
//                 padding: '5px 15px',
//               }}
//               onClick={() => setIsLoginOpen(true)} // Open Login Modal
//             >
//               Log in
//             </CaspianButton>
//             <CaspianButton
//               variant="primary"
//               size="medium"
//               style={{
//                 backgroundColor: '#34A76C',
//                 color: '#ffffff',
//                 borderRadius: '5px',
//                 padding: '5px 15px',
//               }}
//               onClick={() => setIsSignUpOpen(true)} // Open Sign Up Modal
//             >
//               Sign Up
//             </CaspianButton>
//           </Box>
//         </AppBar>

//         {/* Mobile Sidebar Drawer */}
//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//           <Box
//             sx={{
//               width: 250,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               height: '100%',
//               padding: '16px 8px',
//             }}
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//           >
//             <List>
//               {navLinks.map((link, index) => (
//                 <ListItem button key={index} onClick={() => router.push(link.path)}>
//                   <ListItemText
//                     primary={link.title}
//                     style={{
//                       textDecoration: 'none',
//                       color: index === 0 ? '#34A76C' : '#A0A0A0',
//                       fontWeight: index === 0 ? 'bold' : 'normal',
//                       fontSize: '16px',
//                       borderBottom: index === 0 ? '2px solid #000000' : 'none',
//                     }}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Drawer>

//         {/* Login Modal */}
//         <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

//         {/* Sign Up Modal */}
//         <SignUpModal open={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
//         </Provider>

//     </>
//   );
// };

// export default Header;


'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import navLinks from './NavLinks';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CaspianButton from '@/components/Button/Button';
import { CgMenuRight } from 'react-icons/cg';
import LoginModal from '@/app/Login/page';
import SignUpModal from '@/app/SignUp/page';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const sections = navLinks.map((link) => document.querySelector(link.path));
      const scrollPosition = window.scrollY + 200; // Adjust for AppBar height

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(navLinks[index].path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (path) => {
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <Provider store={store}>
        <AppBar
          position="fixed"
          color="transparent"
          sx={{
            boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 0,
            transition: 'box-shadow 0.3s ease-in-out',
            background: '#ffffff',
          }}
        >
          <Box sx={{ padding: '0 5px' }}>
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Logo */}
              <Box
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#34A76C' }}
                >
                  Logo
                </Typography>
              </Box>

              {/* Desktop Links */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    onClick={() => handleScrollToSection(link.path)}
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: activeLink === link.path ? '#34A76C' : '#A0A0A0',
                      fontWeight: activeLink === link.path ? 'bold' : 'normal',
                      fontSize: '16px',
                      borderBottom: activeLink === link.path ? '2px solid #34A76C' : 'none',
                      transition: 'color 0.3s ease-in-out, border-bottom 0.3s ease-in-out',
                    }}
                  >
                    {link.title}
                  </Typography>
                ))}
                {/* Action Buttons */}
                <CaspianButton
                  variant="tertiary"
                  size="medium"
                  style={{
                    border: '1px solid #34A76C',
                    color: '#34A76C',
                    borderRadius: '5px',
                    padding: '5px 20px',
                  }}
                  onClick={() => setIsLoginOpen(true)}
                >
                  Log in
                </CaspianButton>
                <CaspianButton
                  variant="primary"
                  size="medium"
                  style={{
                    backgroundColor: '#34A76C',
                    color: '#ffffff',
                    borderRadius: '5px',
                    padding: '5px 20px',
                  }}
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Sign Up
                </CaspianButton>
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={() => setDrawerOpen(true)}
              >
                <CgMenuRight />
              </IconButton>
            </Toolbar>
          </Box>

          {/* Mobile Action Buttons */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              gap: 2,
              padding: '5px 10px',
              background: '#ffffff',
            }}
          >
            <CaspianButton
              variant="tertiary"
              size="medium"
              style={{
                border: '1px solid #34A76C',
                color: '#34A76C',
                borderRadius: '5px',
                padding: '5px 15px',
              }}
              onClick={() => setIsLoginOpen(true)} // Open Login Modal
            >
              Log in
            </CaspianButton>
            <CaspianButton
              variant="primary"
              size="medium"
              style={{
                backgroundColor: '#34A76C',
                color: '#ffffff',
                borderRadius: '5px',
                padding: '5px 15px',
              }}
              onClick={() => setIsSignUpOpen(true)} // Open Sign Up Modal
            >
              Sign Up
            </CaspianButton>
          </Box>

        </AppBar>

        {/* Mobile Sidebar Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box
            sx={{
              width: 250,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '16px 8px',
            }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
          >
            <List>
              {navLinks.map((link, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleScrollToSection(link.path)}
                  sx={{
                    textDecoration: 'none',
                    color: activeLink === link.path ? '#34A76C' : '#A0A0A0',
                    fontWeight: activeLink === link.path ? 'bold' : 'normal',
                    fontSize: '16px',
                    borderBottom: activeLink === link.path ? '2px solid #34A76C' : 'none',
                  }}
                >
                  <ListItemText primary={link.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Login Modal */}
        <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

        {/* Sign Up Modal */}
        <SignUpModal open={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      </Provider>
    </>
  );
};

export default Header;
