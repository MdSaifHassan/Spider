"use client";

import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import faqData from "@/src/module/faq/faqData";
import TabComponent from "@/src/components/Tab/TabComponent";

const FAQSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        py: 2,
        px: { xs: 2, sm: 3, md: 2 },
        position: "relative",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#34A76C",
          fontSize: { xs: "20px", sm: "24px", md: "36px" },
          mb: 2,
        }}
      >
        Have Any Question?
      </Typography>

      <TabComponent
        tabs={faqData}
        defaultTab={0}
        activeTabColor="#34A76C"
        centerTabs
        tabStyles={{
          fontSize: { xs: "14px", md: "18px" },
        }}
        onTabChange={handleTabChange}
      />

      {/* FAQ Content */}
      <Grid container spacing={3}>
        {faqData[selectedTab]?.questions?.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                px: 1,
                mt: 1.5
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#333", fontSize: { xs: "16px", sm: "20px" } }}
              >
                {item.question}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.6, fontSize: { xs: "14px", sm: "16px" } }}
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
