import React from "react";
import { Box } from "@mui/material";

const Articles = () => {
  return (
    <Box
      marginTop="50px"
      marginLeft="50px"
      display="flex"
      flexDirection="row"
      gap="50px"
    >
      <Box width="100%" display="flex" flexDirection="column">
        <Box paddingBottom="50px">
          <img src="/images/Article1.png" alt="" width="1225px" height="679px" />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
          <img src="/images/Group_322.png" alt="" />
          <img src="/images/1.png" alt="" />
          <img src="/images/Group_323.png" alt="" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" >
        <Box paddingBottom="50px">
          <img src="/images/Article2.png" alt="" width="1225px" height="679px"/>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
          <img src="/images/Group_322.png" alt=""  />
          <img src="/images/2.png" alt="" marginLeft="10px"/>
          <img src="/images/Group_323.png" alt="" marginLeft="10px"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Articles;
