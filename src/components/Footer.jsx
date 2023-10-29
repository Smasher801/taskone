import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      marginTop="50px"
      marginLeft="50px"
      display="flex"
      flexDirection="row"
      sx={{
        backgroundImage: "url('/images/footer_2.png')",
       
        backgroundSize: "cover",
        height: "362px",
        width: "1440px",
      }}
    >
      <Box width="50%" display="flex" alignItems="center" >
        <img src="/images/footer_1.png" alt="" />
      </Box>
    </Box>
  );
};

export default Footer;
