import React, { useState } from "react";
import { Tabs, Tab, Stack, Typography, Box } from "@mui/material";

const TabComponent = ({
  tabs,
  activeTabColor = "#34A76C",
  defaultTab = 0,
  tabStyles = {},
  centerTabs = false,
  onTabChange, 
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (onTabChange) {
      onTabChange(event, newValue); 
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant={centerTabs ? "standard" : "scrollable"}
        scrollButtons={centerTabs ? "auto" : false}
        centered={centerTabs}
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ gap: 0.5 }}
              >
                <Typography
                  variant="body1"
                  color={selectedTab === index ? "black" : "text.secondary"}
                  sx={{
                    fontWeight: selectedTab === index ? "bold" : "normal",
                    ...tabStyles,
                  }}
                >
                  {tab.label}
                </Typography>
                {selectedTab === index && (
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: activeTabColor,
                    }}
                  />
                )}
              </Stack>
            }
            sx={{
              minWidth: "auto",
              textTransform: "none",
              padding: "8px 20px",
              '@media (max-width: 600px)': {
                padding: '6px 8px',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabComponent;
