import { Box } from "@mui/material";
import React from "react";

const MiddlePart = () => {
  return (
    <Box
      marginTop="50px"
      marginLeft="50px"
      display="flex"
      flexDirection="row"
      sx={{
        background:
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      }}
    >
      <Box width="50%" display="flex" justifyContent="center">
        <img src="/images/middleImage.png" alt="" />
      </Box>
      <Box display="flex" alignItems="center">
        <img src="/images/headerRight1.png" alt="" />
      </Box>
    </Box>
  );
};

export default MiddlePart;
