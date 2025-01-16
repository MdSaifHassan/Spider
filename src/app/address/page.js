'use client'
import React, { useState } from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import addressData from "./addressData";
import mechanicData from "./mechanicData";
import { FaRegDotCircle } from "react-icons/fa";
import AddAddressPage from "../../module/Address/AddressBackdrop";
import { Provider } from "react-redux";
import { store } from "@/src/utils/store";
import CaspianButton from "@/src/components/Button/Button";
import FeatureCard from "@/src/components/Card/Card";

const SelectAddressPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleOpenBackdrop = () => setOpenBackdrop(true);
  const handleCloseBackdrop = () => setOpenBackdrop(false);

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  return (
    <Box sx={{ p: 4 }}>
      <Provider store={store}>
        <Typography variant="h4" gutterBottom>
          Select address
        </Typography>

        <Grid container justifyContent={"space-between"}>
          {/* Address Section */}
          <Grid item xs={12} md={8}>
            <Grid
              container
              paddingTop={4}
              paddingBottom={4}
              borderRadius={2}
              gap={4}
              sx={{
                border: {
                  xs: 0, 
                  sm:" 1px solid #ccc", 
                },
               
                flexWrap: { xs: "nowrap", md: "wrap" }, 
                overflowX: { xs: "auto", md: "auto" },
                height: {xs: "300px", md: "100%"} ,

                justifyContent:{ xs: "flex-start", md: "center"}
              }}
            >
              {addressData.map((address, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={5}
                  key={index}
                  sx={{
                    minWidth: { xs: "300px", sm: "300px", md: "300px" },
                  }}
                >
                  <FeatureCard
                    iconsx={{
                      border: "1px  solid #ccc",
                      borderRadius: "100%",
                      padding: "10px",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    image={address.image}
                    icon={address.icon}
                    showIcon={true}
                    showTitle={true}
                    title={address.title}
                    showDescription={true}
                    description={address.description}
                    showButton={true}
                    buttonText={address.buttonText}
                    isSelected={selectedAddress === index}
                    sx={{ cursor: "pointer" }}
                    onButtonClick={handleOpenBackdrop}
                    variant="custom"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Mechanic Section */}
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{
                p: 3,
                border: "1px solid #ccc",
                backgroundColor: "#fff",
              }}
              borderRadius={2}
            >
              <Typography variant="h5" gutterBottom textAlign={"center"}>
                Mechanic
              </Typography>

              {mechanicData.services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    pb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600 }}
                      alignItems={"center"}
                      display={"flex"}
                      gap={1}
                    >
                      <FaRegDotCircle color="#009688" size={18} />{" "}
                      {service.name}
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: "auto", color: "#F2C94C" }}
                      >
                        ${service.price}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      borderBottom={1}
                      borderColor={"#ccc"}
                      p={1}
                      sx={{ width: "93%", marginLeft: "auto" }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" color="#009688">Total</Typography>
                <Typography variant="body1" color="#F2C94C">
                  ${mechanicData.total}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" color="#009688">Discount</Typography>
                <Typography variant="body1" color="#F2C94C">
                ${mechanicData.discount}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ fontWeight: "bold", }}
              >
                <Typography variant="body1" color="#009688">Payable</Typography>
                <Typography variant="body1" color="#F2C94C">
                  ${mechanicData.payable}
                </Typography>
              </Box>
              <Box justifyContent={"center"} display={"flex"} mt={2}>
                <CaspianButton size="large" title="Pay Here" variant="custom" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <AddAddressPage open={openBackdrop} onClose={handleClose} />
      </Provider>
    </Box>
  );
};

export default SelectAddressPage;
