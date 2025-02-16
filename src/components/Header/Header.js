"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../utils/slices/authSlice";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CgMenuRight } from "react-icons/cg";
import Stack from "@mui/material/Stack";
import navLinks from "../../helpers/NavLinks";
import CaspianButton from "../Button/Button";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated || false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      if (pathname === "/") {
        const scrollPosition = window.scrollY + 200;
        const sections = navLinks.map((link) => document.querySelector(link.path));

        sections.forEach((section, index) => {
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveLink(navLinks[index].path);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = (path) => {
    if (path.startsWith("/")) {
      router.push(path);
    } else if (pathname === "/") {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setDrawerOpen(false);
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
      {/* App Bar */}
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : 0,
          transition: "box-shadow 0.3s ease-in-out",
          background: "#ffffff",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#34A76C", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Logo
          </Typography>

          {/* Desktop Navigation (Only on Home Page) */}
          {pathname === "/" && (
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navLinks.map((link, index) => (
                <Typography
                  key={index}
                  onClick={() => handleNavigation(link.path)}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: activeLink === link.path ? "#34A76C" : "#A0A0A0",
                    fontWeight: activeLink === link.path ? "bold" : "normal",
                    fontSize: "16px",
                    borderBottom: activeLink === link.path ? "2px solid #34A76C" : "none",
                    transition: "color 0.3s ease-in-out, border-bottom 0.3s ease-in-out",
                  }}
                >
                  {link.title}
                </Typography>
              ))}
            </Stack>
          )}

          {/* Auth Buttons (Desktop) */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {isAuthenticated ? (
              <CaspianButton variant="custom2" size="medium" onClick={handleLogout}>
                Logout
              </CaspianButton>
            ) : (
              <>
                <CaspianButton variant="custom2" size="medium" onClick={() => router.push("/Login")}>
                  Log in
                </CaspianButton>
                <CaspianButton variant="custom3" size="medium" onClick={() => router.push("/SignUp")}>
                  Sign Up
                </CaspianButton>
              </>
            )}
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <CgMenuRight />
          </IconButton>
        </Toolbar>

      {/* Mobile Auth Buttons (Outside Drawer, Below Menu Icon) */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: 'end',
            padding: '0 10px',
            background: '#ffffff',
        }}
      >
        {isAuthenticated ? (
          <CaspianButton variant="custom2" size="medium" onClick={handleLogout}>
            Logout
          </CaspianButton>
        ) : (
          <>
            <CaspianButton variant="custom2" size="medium" onClick={() => router.push("/Login")}>
              Log in
            </CaspianButton>
            <CaspianButton variant="custom3" size="medium" onClick={() => router.push("/SignUp")}>
              Sign Up
            </CaspianButton>
          </>
        )}
      </Stack>

      </AppBar>


      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250, padding: "16px 8px" }}>
          {/* Show nav links only on Home Page */}
          {pathname === "/" &&
            navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleNavigation(link.path)}
                sx={{
                  color: activeLink === link.path ? "#34A76C" : "#A0A0A0",
                  fontWeight: activeLink === link.path ? "bold" : "normal",
                  fontSize: "16px",
                  borderBottom: activeLink === link.path ? "2px solid #34A76C" : "none",
                }}
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
