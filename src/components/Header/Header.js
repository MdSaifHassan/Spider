'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import navLinks from '../../helpers/NavLinks';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CgMenuRight } from 'react-icons/cg';
import LoginModal from '@/src/module/Login/page';
import SignUpModal from '@/src/module/SignUp/page';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';
import CaspianButton from '../Button/Button';
import Stack from '@mui/material/Stack';

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
      const scrollPosition = window.scrollY + 200; 

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
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#34A76C', cursor: 'pointer' }}
              onClick={() => router.push('/')}
            >
              Logo
            </Typography>

            {/* Desktop Links */}
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
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
              <CaspianButton  
                variant="custom2"
                size="medium"
                onClick={() => setIsLoginOpen(true)}
              >
                Log in
              </CaspianButton>
              <CaspianButton
                variant="custom"
                size="medium"
               
                onClick={() => setIsSignUpOpen(true)}
              >
                Sign Up
              </CaspianButton>
            </Stack>

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

        {/* Mobile Action Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'end',
            padding: '0 10px',
            background: '#ffffff',
          }}
        >
          <CaspianButton
            variant="custom2"
            size="medium"
            onClick={() => setIsLoginOpen(true)} 
          >
            Log in
          </CaspianButton>
          <CaspianButton
            variant="custom"
            size="medium"
            onClick={() => setIsSignUpOpen(true)}
          >
            Sign Up
          </CaspianButton>
        </Stack>

        </AppBar>


        {/* Mobile Sidebar Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List sx={{ width: 250, padding: '16px 8px' }}>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleScrollToSection(link.path)}
                sx={{
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
