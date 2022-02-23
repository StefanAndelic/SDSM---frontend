import React from "react";
import { Button } from "@mui/material";
function ButtonComponent({
  style,
  type,
  variant,
  children,
  disabled,
  onClick,
  color,
  sx,
}: any) {
  return (
    <Button
      variant={variant}
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      color={color}
      sx={sx}
      fullWidth
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
