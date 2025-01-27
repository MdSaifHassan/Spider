"use client";
import React, { useState } from "react";
import { Typography, Divider, Grid, Box, Stack } from "@mui/material";
import styles from "./PackagesSection.module.scss";
import FeatureCard from "@/src/components/Card/Card";
import { packagesData } from "@/src/helpers/packagesData";
import CaspianButton from "@/src/components/Button/Button";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const PackagesSection = () => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const handleAddToCart = (item) => {
    const existingItem = cart.items.find((i) => i.title === item.title);
    if (existingItem) {
      const updatedItems = cart.items.map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
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
    const existingItem = cart.items.find((i) => i.title === item.title);
    if (existingItem && existingItem.quantity > 1) {
      const updatedItems = cart.items.map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart({
        ...cart,
        items: updatedItems,
        total: cart.total - item.price,
      });
    } else {
      const updatedItems = cart.items.filter((i) => i.title !== item.title);
      setCart({
        ...cart,
        items: updatedItems,
        total: cart.total - item.price,
      });
    }
  };

  const handleRemoveAll = (item) => {
    const updatedItems = cart.items.filter((i) => i.title !== item.title);
    setCart({
      ...cart,
      items: updatedItems,
      total: cart.total - item.price * item.quantity,
    });
  };

  const getItemQuantity = (title) => {
    const item = cart.items.find((i) => i.title === title);
    return item ? item.quantity : 0;
  };

  return (
    <Grid container spacing={2} className={styles.packagesSection}>
      {/* Left Section */}
      <Grid item xs={12} md={8} className={styles.leftSection}>
        <Typography variant="h5" className={styles.sectionTitle}>
          Packages
        </Typography>
        <Grid container spacing={2} className={styles.featureGrid}>
          {packagesData.map((packageData) => (
            <Grid item xs={12} sm={6} spacing={1} key={packageData.title}>
              <Box className={styles.featureCardContainer}>
                <FeatureCard
                  cardDirection="row-reverse"
                  cardJustifyContent="space-between"
                  cardAlign="space-between"
                  showTitle
                  title={packageData.title}
                  showDescription
                  showImage
                  image={packageData.image}
                  imageSx={{ width: "6rem", height: "6rem" }}
                  description={packageData.description}
                  subDescription={
                    <>
                      Price ₹{packageData.price}{" "}
                      <span className={styles.oldPrice}>
                        ₹{packageData.oldPrice}
                      </span>
                    </>
                  }
                  showButton={getItemQuantity(packageData.title) === 0}
                  btnPOsitionBottom={"0.2rem"}
                  btnPOsitionRight={"1.7rem"}
                  buttonText="Add"
                  variant={"custom2"}
                  size="small"
                  onButtonClick={() => handleAddToCart(packageData)}
                  additionalButton={
                    getItemQuantity(packageData.title) > 0 && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CaspianButton
                          variant="IconBtn"
                          title={
                            <span
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                              {getItemQuantity(packageData.title)}
                            </span>
                          }
                          startIcon={
                            <FaMinus
                              size={12}
                              style={{
                                color:
                                  getItemQuantity(packageData.title) === 1
                                    ? "#888"
                                    : "#34A76C",
                              }}
                            />
                          }
                          endIcon={<FaPlus size={12} color="#34A76C" />}
                          onStartIconClick={() =>
                            handleRemoveFromCart(packageData)
                          }
                          onEndIconClick={() => handleAddToCart(packageData)}
                          DisableIcon={getItemQuantity(packageData.title) === 1}
                        />
                      </Stack>
                    )
                  }
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={4} className={styles.rightSection}>
        <Typography variant="h6" className={styles.cartTitle}>
          Cart
        </Typography>
        <Box className={styles.cartContainer}>
          {cart.items.length > 0 ? (
            cart.items.map((item) => (
              <Box key={item.title} className={styles.cartItem}>
                <Typography variant="body1">{item.title}</Typography>
                <Box className="actionButtons">
                  <CaspianButton
                    variant="IconBtn"
                    title={
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {item.quantity}
                      </span>
                    }
                    startIcon={
                      <FaMinus
                        size={14}
                        style={{
                          color: item.quantity === 1 ? "#888" : "#34A76C",
                        }}
                      />
                    }
                    endIcon={<FaPlus size={14} color="#34A76C" />}
                    onStartIconClick={() => handleRemoveFromCart(item)}
                    onEndIconClick={() => handleAddToCart(item)}
                    DisableIcon={item.quantity === 1}
                  />
                </Box>
                <Typography variant="body1" className="cartItemPrice">
                  ₹{item.price * item.quantity}
                </Typography>
                <CaspianButton
                  onEndIconClick={() => handleRemoveAll(item)}
                  variant="outline"
                  className="removeButton"
                  endIcon={<FaTrashAlt color="red" />}
                />
              </Box>
            ))
          ) : (
            <Typography variant="body2">Your cart is empty</Typography>
          )}
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" className={styles.total}>
          Total: ₹{cart.total.toFixed(2)}
        </Typography>
        <CaspianButton
          variant="custom3"
          color="cta"
          className={styles.rewardsButton}
        >
          Assured reward from CRED
        </CaspianButton>
        <Typography variant="body2" className={styles.ucPromise}>
          UC Promise
        </Typography>
        <ul className={styles.ucPromiseList}>
          <li>Verified Professionals</li>
          <li>Safe Chemicals</li>
          <li>Superior Stain Removal</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default PackagesSection;
