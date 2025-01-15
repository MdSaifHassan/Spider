import React from 'react'

function page() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* Main Container */}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            overflow: "visible", 
            mt: 10, 
            pb: 10, 
          }}
        >
          {/* Background Section */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            {/* Text Section */}
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "24px", md: "36px" },
                  color: "black",
                  textShadow: "0 1px 1px rgba(0, 0, 0, 0.8)",
                  mb: 1,
                }}
              >
                <span style={{ color: "#34A76C" }}>{homeData.heading}</span>{" "}
                {homeData.subheading}
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
            </Box>

            {/* Carousel Section */}
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
              top: "40%", 
              left: "80%",
              transform: "translate(-50%, -50%)",
              zIndex: 2, 
              background: "rgba(240, 240, 240, 0.9)", 
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px",
              width: "90%",
              boxSizing: "border-box", 
            }}
          >
            <Form />
          </Box>
        </Box>
      </LocalizationProvider>
    </Provider>
  );
}

export default page