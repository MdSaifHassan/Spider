import React, { useState } from "react";
import { Typography, Divider, ListItem, ListItemText, Grid, Box } from "@mui/material";
import styles from "./PackagesSection.module.scss";
import FeatureCard from "@/src/components/Card/Card"; // Assuming you have this component
import { packagesData } from "@/src/helpers/packagesData";
import CaspianButton from "@/src/components/Button/Button";

const PackagesSection = () => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const handleAddToCart = (item) => {
    const existingItem = cart.items.find((i) => i.title === item.title);
    if (existingItem) {
      const updatedItems = cart.items.map((i) =>
        i.title === item.title
          ? { ...i, quantity: i.quantity + 1 }
          : i
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
        i.title === item.title
          ? { ...i, quantity: i.quantity - 1 }
          : i
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
    <div className={styles.packagesSection}>
      {/* Left Section */}
      <Grid item xs={12} md={8} className={styles.leftSection}>
        <Typography variant="h5" className={styles.sectionTitle}>
          Packages
        </Typography>
        <div className={styles.featureGrid}>
          {packagesData.map((packageData) => (
            <FeatureCard
              sx={{ width: "100%" }}
              key={packageData.title}
              title={packageData.title}
              showTitle
              description={`${packageData.description} 
              - Price ${packageData.price}`} 
              showDescription
              additionalButton={
                getItemQuantity(packageData.title) === 0 ? (
                  <CaspianButton
                    variant="secondary"
                    size="small"
                    onClick={() => handleAddToCart(packageData)}
                  >
                    Add
                  </CaspianButton>
                ) : (
                  <Box className={styles.quantityControl}>
                    <CaspianButton
                      variant="secondary"
                      size="small"
                      isDisabled={getItemQuantity(packageData.title) === 1} 
                      onClick={() => handleRemoveFromCart(packageData)}
                    >
                      -
                    </CaspianButton>
                    <Typography variant="body1" className={styles.quantity}>
                      {getItemQuantity(packageData.title)}
                    </Typography>
                    <CaspianButton
                      variant="secondary"
                      size="small"
                      onClick={() => handleAddToCart(packageData)}
                    >
                      +
                    </CaspianButton>
                  </Box>
                )
              }
            />
          ))}
        </div>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={4} className={styles.rightSection}>
        <Typography variant="h6" className={styles.cartTitle}>
          Cart
        </Typography>
        {cart.items.length > 0 ? (
          cart.items.map((item) => (
            <div key={item.title} className={styles.cartItem}>
              <Typography variant="body1">{item.title}</Typography>
              <div className={styles.quantityControl}>
                <CaspianButton
                  variant="secondary"
                  size="small"
                  isDisabled={item.quantity === 1} 
                  onClick={() => handleRemoveFromCart(item)}
                >
                  -
                </CaspianButton>
                <Typography variant="body1" className={styles.quantity}>
                  {item.quantity}
                </Typography>
                <CaspianButton
                  variant="secondary"
                  size="small"
                  onClick={() => handleAddToCart(item)}
                >
                  +
                </CaspianButton>
              </div>
              <Typography variant="body1">
                ₹{item.price * item.quantity}
              </Typography>
              <CaspianButton
                variant="custom"
                size="small"
                onClick={() => handleRemoveAll(item)}
              >
                Remove Item
              </CaspianButton>
            </div>
          ))
        ) : (
          <Typography variant="body2">Your cart is empty</Typography>
        )}
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">
          Total: ₹{cart.total.toFixed(2)}
        </Typography>
        <CaspianButton
          variant="custom2"
          color="cta"
          className={styles.rewardsButton}
        >
          Assured reward from CRED
        </CaspianButton>
        <Typography variant="body2" className={styles.ucPromise}>
          UC Promise
        </Typography>
        <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
          <ListItemText>Verified Professionals</ListItemText>
          <ListItemText>Safe Chemicals</ListItemText>
          <ListItemText>Superior Stain Removal</ListItemText>
        </ListItem>
      </Grid>
    </div>
  );
};

export default PackagesSection;
