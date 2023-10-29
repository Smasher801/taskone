import React from "react";
import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box component="div" display="flex" flexDirection="row" marginLeft="50px">
      <Box component="div" width="50%">
        <Box marginTop="40px">
          <img
            src="/images/header_1.png"
            alt="image1"
            width="107px"
            height="83px"
          />
        </Box>
        <Box component="div">
          <Box
            component="p"
            fontWeight="700"
            fontSize="62px"
            color="#0E2368"
            marginBottom="0px"
          >
            Discover the
          </Box>
          <Box
            component="p"
            fontWeight="700"
            fontSize="62px"
            color="#0E2368"
            margin="0px"
          >
            {" "}
            Best Food{" "}
          </Box>
          <Box
            component="p"
            fontWeight="700"
            fontSize="62px"
            color="#0E2368"
            margin="0px"
          >
            {" "}
            and Drinks{" "}
          </Box>
        </Box>
        <Box paddingTop="30px">
          <Box component="p" fontWeight="400" fontSize="17px">
            Naturally made Healthcare Products for the
          </Box>
          <Box component="p" fontWeight="400" fontSize="17px">
            better care & support of your body.
          </Box>
        </Box>
        <Box paddingTop="50px">
          <Button variant="contained" color="error">
            Explore Now!
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundImage: "url('/images/headerRight.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "804px",
          width: "735px",
        }}
      >
        <img
          src="/images/vector.png"
          alt="vector"
          width="752px"
          height="839px"
        />
      </Box>
    </Box>
  );
};

export default Header;
