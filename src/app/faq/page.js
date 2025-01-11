"use client";

import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import TabComponent from "@/components/Tab/TabComponent"; // Import your TabComponent
import faqData from "@/module/faq/faqData"; // Import FAQ data

const FAQSection = () => {
  const [selectedTab, setSelectedTab] = useState(0); // State to track selected tab

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue); // Update selected tab
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: 4,
        px: { xs: 2, md: 1 },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#34A76C",
          mb: 4,
        }}
      >
        Have Any Question?
      </Typography>

      {/* TabComponent */}
      <TabComponent
        tabs={faqData}
        defaultTab={0}
        activeTabColor="#34A76C"
        centerTabs
        tabStyles={{
          fontSize: {xs: "15px", md: "18px"},
        }}
        onTabChange={handleTabChange} // Pass the handler for tab change
      />

      {/* FAQ Content */}
      <Grid container spacing={3}>
        {faqData[selectedTab]?.questions?.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                px: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
              >
                {item.question}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.6 }}
              >
                {item.answer}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQSection;
