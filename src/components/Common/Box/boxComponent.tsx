import React from "react";
import { Box } from "@mui/material";
function BoxComponent({
  children,
  marginTop,
  marginLeft,
  marginRight,
  display,
  flexDirection,
  alignItems,
}: any) {
  return (
    <Box
      sx={{
        marginTop: { marginTop },
        marginLeft: { marginLeft },
        marginRight: { marginRight },
        display: { display },
        flexDirection: { flexDirection },
        alignItems: { alignItems },
      }}
    >
      {children}
    </Box>
  );
}

export default BoxComponent;
