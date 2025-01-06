'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import navLinks from './NavLinks';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CustomButton from '@/components/Button/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 0,
          transition: 'box-shadow 0.3s ease-in-out',
          background: '#ffffff',
        }}
      >
        <Box sx={{ padding: '0 24px' }}>
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
              <Image
                // src="/Aone-InfoSystem-Logo.png"
                alt="Logo"
                width={90}
                height={40}
              />
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
                <Link
                  key={index}
                  href={link.path}
                  style={{
                    textDecoration: 'none',
                    color: index === 0 ? '#34A76C' : '#A0A0A0',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    fontSize: '16px',
                    borderBottom: index === 0 ? '2px solid #000000' : 'none',
                  }}
                >
                  {link.title}
                </Link>
              ))}
              {/* Action Buttons */}
              <CustomButton
                variant="outlined"
                color="success"
                size="medium"
                onClick={() => router.push('/login')}
              >
                Log in
              </CustomButton>
              <CustomButton
                variant="contained"
                color="success"
                size="medium"
                onClick={() => router.push('/signup')}
              >
                Sign Up
              </CustomButton>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
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
          <CustomButton
            variant="outlined"
            color="success"
            size="small"
            onClick={() => router.push('/login')}
          >
            Log in
          </CustomButton>
          <CustomButton
            variant="contained"
            color="success"
            size="small"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </CustomButton>
        </Box>
      </AppBar>

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
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
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} onClick={() => router.push(link.path)}>
                <ListItemText primary={link.title} style={{
                    textDecoration: 'none',
                    color: index === 0 ? '#34A76C' : '#A0A0A0',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    fontSize: '16px',
                    borderBottom: index === 0 ? '2px solid #000000' : 'none',
                  }}/>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
