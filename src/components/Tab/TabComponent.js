import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TypographyComponent from "../Typography/Typography"; // Import your TypographyComponent

const TabComponent = ({
  tabs,                      
  activeTabColor = "#34A76C", 
  defaultTab = 0,             
  tabStyles = {},             
  centerTabs = false,        
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs */}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Label with TypographyComponent */}
                <TypographyComponent
                  variant="body1"
                  text={tab.label}
                  color={selectedTab === index ? "black" : "text.secondary"}
                  sx={{
                    fontWeight: selectedTab === index ? "bold" : "normal",
                    ...tabStyles,
                  }}
                />
                {/* Active Indicator */}
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
              </Box>
            }
            sx={{
              minWidth: "auto",
              textTransform: "none",
              padding: "8px 16px",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabComponent;
