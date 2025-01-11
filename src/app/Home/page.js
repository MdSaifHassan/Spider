'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "@/components/Carousel/Carousel";
import homeData from "@/module/home/HomeData";
import Form from "@/module/home/Form/form"; // Import your form component
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { store } from "@/utils/store"; // Your Redux store

export default function HomePage() {
  const renderCarouselItem = (item) => (
    <img
      src={item.imageUrl}
      alt={item.alt}
      style={{
        width: "calc(80% + 60px)",
        height: "280px",
        objectFit: "cover",
        borderRadius: "8px",
        margin: "8px",
      }}
    />
  );

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* Heading */}
       <Box sx={{ p: 4, mt: 5 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "36px" },
                color: "black",
                textShadow: "0 1px 1px rgba(0, 0, 0, 0.8)",
              }}
            >
              <span style={{ color: "#34A76C" }}>{homeData.heading}</span> {homeData.subheading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "black",
              }}
            >
              {homeData.description}
            </Typography>
        
        <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          {/* Carousel */}
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }}>
            <Carousel
              items={homeData.carouselItems}
              renderItem={renderCarouselItem}
              showButtons={false}
              settings={{
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                centerMode: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2.1,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ],
              }}
            />
          </Box>

          {/* Form Section */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "80%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              background: "rgba(255, 255, 255, 0.9)",
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px",
              width: "90%",
            }}
          >
            <Form />
          </Box>
          </Box>

        
        </Box>
      </LocalizationProvider>
    </Provider>
  );
}





// "use client";
// import React, { useState } from "react";
// import { Provider } from "react-redux";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import Form from "../../module/Home/Form/form";
// import { store } from "../../utils/store";
// import CaspianButton from "../../Components/Button/Button";
// import { Box } from "@mui/material";
// import LoginModal from "../Login/page";
// import SignUpModal from "../SignUp/page"; // Import the SignUpModal

// const Home = () => {
//   const [openLoginModal, setOpenLoginModal] = useState(false);
//   const [openSignUpModal, setOpenSignUpModal] = useState(false); // State for SignUpModal

//   const handleOpenLoginModal = () => {
//     setOpenLoginModal(true);
//   };

//   const handleCloseLoginModal = () => {
//     setOpenLoginModal(false);
//   };

//   const handleOpenSignUpModal = () => {
//     setOpenSignUpModal(true);
//   };

//   const handleCloseSignUpModal = () => {
//     setOpenSignUpModal(false);
//   };

//   return (
//     <Provider store={store}>
//       <Box
//         minWidth={"100%"}
//         justifyContent={"end"}
//         display={"flex"}
//         gap={1}
//         padding={4}
//       >
//         <CaspianButton
//           variant="primary"
//           size="medium"
//           style={{
//             backgroundColor: "#34A76C",
//             color: "#ffffff",
//             borderRadius: "5px",
//             padding: "5px 20px",
//           }}
//           onClick={handleOpenLoginModal}
//           title="Login"
//         />
//         <CaspianButton
//           variant="primary"
//           size="medium"
//           style={{
//             backgroundColor: "#34A76C",
//             color: "#ffffff",
//             borderRadius: "5px",
//             padding: "5px 20px",
//           }}
//           onClick={handleOpenSignUpModal} // Open SignUp modal
//           title="SignUp"
//         />
//       </Box>
//       {/* Login Modal */}
//       <LoginModal open={openLoginModal} onClose={handleCloseLoginModal} />
//       {/* SignUp Modal */}
//       <SignUpModal open={openSignUpModal} onClose={handleCloseSignUpModal} />
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <Form />
//       </LocalizationProvider>
//     </Provider>
//   );
// };

// export default Home;
