// "use client"
// import React, { useState } from "react";
// import { Provider } from "react-redux";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import Form from "../../module/Home/Form/form";
// import { store } from "../../utils/store";
// import CaspianButton from "../../Components/Button/Button";
// import { Box } from "@mui/material";
// import LoginModal from "../Login/page";

// const Home = () => {
//   const [openLoginModal, setOpenLoginModal] = useState(false);

//   const handleOpenLoginModal = () => {
//     setOpenLoginModal(true);
//   };

//   const handleCloseLoginModal = () => {
//     setOpenLoginModal(false);
//   };
//   return (
//     <Provider store={store}>
//       <Box minWidth={"100%"}  justifyContent={"end"}  display={"flex"} gap={1} padding={4}>
//       <CaspianButton
//                 variant="primary"
//                 size="medium"
//                 style={{
//                   backgroundColor: '#34A76C',
//                   color: '#ffffff',
//                   borderRadius: '5px',
//                   padding: '5px 20px',
//                 }}
//                 onClick={handleOpenLoginModal}
//                  title="Login"
//               />
//                 <CaspianButton
//                 variant="primary"
//                 size="medium"
//                 style={{
//                   backgroundColor: '#34A76C',
//                   color: '#ffffff',
//                   borderRadius: '5px',
//                   padding: '5px 20px',
//                 }}
//                 onClick={() => router.push('/signup')}
//                 title="SignUp"
//             />
//       </Box>
//     <LoginModal open={openLoginModal}
//         onClose={handleCloseLoginModal}/>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <Form />
//       </LocalizationProvider>
//     </Provider>
//   );
// };

// export default Home;



"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Form from "../../module/Home/Form/form";
import { store } from "../../utils/store";
import CaspianButton from "../../Components/Button/Button";
import { Box } from "@mui/material";
import LoginModal from "../Login/page";
import SignUpModal from "../SignUp/page"; // Import the SignUpModal

const Home = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false); // State for SignUpModal

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleOpenSignUpModal = () => {
    setOpenSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  };

  return (
    <Provider store={store}>
      <Box
        minWidth={"100%"}
        justifyContent={"end"}
        display={"flex"}
        gap={1}
        padding={4}
      >
        <CaspianButton
          variant="primary"
          size="medium"
          style={{
            backgroundColor: "#34A76C",
            color: "#ffffff",
            borderRadius: "5px",
            padding: "5px 20px",
          }}
          onClick={handleOpenLoginModal}
          title="Login"
        />
        <CaspianButton
          variant="primary"
          size="medium"
          style={{
            backgroundColor: "#34A76C",
            color: "#ffffff",
            borderRadius: "5px",
            padding: "5px 20px",
          }}
          onClick={handleOpenSignUpModal} // Open SignUp modal
          title="SignUp"
        />
      </Box>
      {/* Login Modal */}
      <LoginModal open={openLoginModal} onClose={handleCloseLoginModal} />
      {/* SignUp Modal */}
      <SignUpModal open={openSignUpModal} onClose={handleCloseSignUpModal} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form />
      </LocalizationProvider>
    </Provider>
  );
};

export default Home;
