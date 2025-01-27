"use client";
import React, { useState, useCallback } from "react";
import { Grid, Box, Typography, Backdrop, Divider, Stack } from "@mui/material";
import AddAddressBackdrop from "@/src/module/Address/AddressBackdrop";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaRegDotCircle, FaTrash } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { deleteAddress } from "@/src/utils/slices/addresSlice";
import FeatureCard from "@/src/components/Card/Card.js";
import CaspianButton from "@/src/components/Button/Button.js";
import mechanicData from "@/src/utils/adressData/mechanicData";

const AddressPage = () => {
  const [backdropOpen, setBackdropOpen] = useState(false);

  const addresses = useSelector((state) => state.address.addresses);
  const defaultAddressId = useSelector(
    (state) => state.address.defaultAddressId
  );

  const dispatch = useDispatch();

  const handleDeleteAddress = useCallback(
    (id) => {
      dispatch(deleteAddress(id));
    },
    [dispatch]
  );

  const handleSelectAddress = useCallback((id) => {
    alert(`Address ID ${id} selected!`);
  }, []);

  return (
    <Box
      p={3}
      sx={{
        mt: { md: 5, xs: 10 },
      }}
    >
      <Typography variant="h4" mb={3}>
        Select Address
      </Typography>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            paddingTop={5}
            paddingBottom={5}
            borderRadius={2}
            gap={4}
            sx={{
              border: { xs: 0, md: "1px solid #ccc" },
              flexWrap: { xs: "nowrap", md: "wrap" },
              overflowX: { xs: "auto", md: "auto" },
              height: { xs: "300px", md: "100%" },
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              sx={{
                minWidth: { xs: "300px", sm: "300px", md: "300px" },
                minHeight: { xs: "200px", sm: "200px", md: "200px" },
              }}
            >
              <FeatureCard
                iconsx={{
                  border: "2px dotted #009688",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                showIcon
                icon={
                  <Box sx={{ fontSize: 40 }}>
                    <FaPlus size={24} color="#009688" />
                  </Box>
                }
                showTitle
                title="Add Address"
                showDescription
                description="Add a new address for service delivery."
                showButton
                buttonText="Add New"
                variant="custom"
                 btnPosition="relative"
                btnWidth={"50%"}
                onButtonClick={() => setBackdropOpen(true)}
              />
            </Grid>
            {addresses.map((address, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                key={address.id}
                sx={{
                  minWidth: { xs: "300px", sm: "300px", md: "300px" },
                  minHeight: { xs: "200px", sm: "200px", md: "150px" },
                }}
              >
                <FeatureCard
                  iconsx={{
                    borderRadius: "100%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px",
                  }}
                  btnPosition="relative"
                  showIcon
                  icon={
                    <Box>
                      {defaultAddressId === address.id ? (
                        <FiHome size={20} color="#009688" />
                      ) : (
                        <FiHome size={20} color="#009688" />
                      )}
                    </Box>
                  }
                  variant="custom"
                  size="small"
                  showTitle
                  title={`Address ${index + 1}`}
                  showDescription
                  description={`${address.address}, ${address.city}, ${address.state}`}
                  additionalButton={
                    <Box
                      display="flex"
                      gap={1}
                    >
                      <CaspianButton
                        variant="custom"
                        color="primary"
                        buttonText="Select"
                        title="Select"
                        onClick={() => handleSelectAddress(address.id)}
                      />
                      <CaspianButton
                        variant="custom"
                       title={"delete"}
                       onClick={() => handleDeleteAddress(address.id)}
                      />
                    </Box>
                   
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
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
                    <FaRegDotCircle color="#009688" size={18} /> {service.name}
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
            <Grid pl={4}>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
              >
                <Typography variant="body1" color="#009688">
                  Total
                </Typography>
                <Typography variant="body1" color="#F2C94C">
                  ${mechanicData.total}
                </Typography>
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
              >
                <Typography variant="body1" color="#009688">
                  Discount
                </Typography>
                <Typography variant="body1" color="#F2C94C">
                  ${mechanicData.discount}
                </Typography>
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
                mb={2}
              >
                <Typography variant="body1" color="#009688">
                  Payable
                </Typography>
                <Typography variant="body1" color="#F2C94C">
                  ${mechanicData.payable}
                </Typography>
              </Stack>
              <Stack mt={2} width="60%" margin={"auto"}>
                <CaspianButton size="medium" title="Pay Here" variant="custom" />
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <AddAddressBackdrop
          open={backdropOpen}
          onClose={() => setBackdropOpen(false)}
        />
      </Box>
    </Box>
  );
};

export default AddressPage;
