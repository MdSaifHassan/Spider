
"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
  Grid,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { packagesData } from "@/src/helpers/packagesData";
import Carousel from "@/src/components/Carousel/Carousel";
import CaspianButton from "@/src/components/Button/Button";
import FeatureCard from "@/src/components/Card/Card";
import { FaMinus,FaPlus,FaTrashAlt } from "react-icons/fa";

const CheckoutPage = () => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const handleAddToCart = (item) => {
    const existingItem = cart.items.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedItems = cart.items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart({
        ...cart,
        items: updatedItems,
        total: cart.total + item.price,
      });
    } else {
      setCart({
        ...cart,
        items: [...cart.items, { ...item, quantity: 1 }],
        total: cart.total + item.price,
      });
    }
  };

  const handleRemoveFromCart = (item) => {
    const existingItem = cart.items.find((i) => i.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      const updatedItems = cart.items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart({
        ...cart,
        items: updatedItems,
        total: cart.total - item.price,
      });
    }
  };

  const handleRemoveAll = (item) => {
    const updatedItems = cart.items.filter((i) => i.id !== item.id);
    setCart({
      ...cart,
      items: updatedItems,
      total: cart.total - item.price * item.quantity,
    });
  };

  const renderCartItems = () =>
    cart.items.map((item) => (
      <Box
        key={item.id}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>{item.title}</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CaspianButton
            variant="IconBtn"
            title={item.quantity}
            startIcon={<FaMinus size={10}/>}
            endIcon={<FaPlus size={10} />}
            onStartIconClick={() => handleRemoveFromCart(item)}
            onEndIconClick={() => handleAddToCart(item)}
            DisableIcon={item.quantity === 1}
          />
          {/* <IconButton  >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton> */}
            <CaspianButton
             onEndIconClick={() => handleRemoveAll(item)}
            variant="outline"
            endIcon={<FaTrashAlt color="red"/>}
          />
        </Stack>
        <Typography>₹{item.price * item.quantity}</Typography>
      </Box>
    ));

  return (
    <Box padding={4} mt={5}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box padding={3} borderRadius={2}>
            <Box bgcolor="#e0f7fa" padding={2} mb={2} borderRadius={1}>
              <Typography variant="body2">
                You're saving total ₹73 on this order!
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="body1" mb={1}>
                Account
              </Typography>
              <Typography variant="body2" mb={5}>
                To book the service, please login or sign up
              </Typography>
              <CaspianButton fullWidth variant="custom" title="Login" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* cerasole */}
          <Box padding={3} borderRadius={2} border={1} borderColor="gray" mb={4}>
            <Typography variant="h6" mb={2}>
              Intense Bathroom Cleaning
            </Typography>
            {cart.items.length > 0 ? (
              renderCartItems()
            ) : (
              <Typography>Your cart is empty</Typography>
            )}

            <Divider sx={{ my: 2 }} />

            <Box mt={4}>
              <Typography variant="h6" mb={2}>
                Frequently Added Together
              </Typography>
              <Carousel
                items={packagesData}
                showButtons={true}
                settings={{
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false,
                }}
                renderItem={(item) => (
                  <Grid ml={2} width="200px" >
                    <FeatureCard
                      cardDirection="row-reverse"
                      title={item.title}
                      showTitle
                      showDescription
                      description={`₹${item.price}`}
                      showButton
                      buttonText="Add"
                      onButtonClick={() => handleAddToCart(item)}
                      showImage
                      image={item.image}
                      btnPOsitionBottom={"30px"}
                      btnPOsitionRight={"22px"}
                      variant="custom2"
                    />
                  </Grid>
                )}
              />
              <Checkbox />
              <small>Avoid calling before reaching the location</small>
            </Box>
          </Box>
          {/* offer */}
          <Box
            padding={3}
            borderRadius={2}
            border={1}
            borderColor="gray"
            display="flex"
            alignItems="center"
            mb={4}
          >
            <Box
              width="30px"
              height="30px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="green"
              color="white"
              fontWeight="bold"
              mr={2}
            >
              %
            </Box>
            <Box>
              <Typography fontWeight="bold">Coupons and offers</Typography>
              <Typography variant="body2" color="textSecondary">
                Login/Sign up to view offers
              </Typography>
            </Box>
          </Box>

          {/*payment */}
          <Box padding={3} borderRadius={2} border={1} borderColor="gray">
            <Typography variant="h6" mb={2}>
              Payment Summary
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Item Total</Typography>
              <Typography>₹{cart.total}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Taxes and Fees</Typography>
              <Typography>₹49</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" fontWeight="bold">
              Total: ₹{cart.total + 49}
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default CheckoutPage;

