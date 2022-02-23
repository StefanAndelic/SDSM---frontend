import React from "react";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";

function IconComponent({ alt, src, onClick }: any) {
  return (
    <IconButton onClick={onClick}>
      <Avatar alt={alt} src={src} sx={{ width: 50, height: 50 }} />
    </IconButton>
  );
}

export default IconComponent;
