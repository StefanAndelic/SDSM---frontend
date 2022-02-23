import React from "react";
import Typography from "@mui/material/Typography";
function TextComponent({
  children,
  component,
  variant,
  align,
  marginTop,
  ...props
}: any) {
  return (
    <Typography
      component={component}
      variant={variant}
      align={align}
      marginTop={marginTop}
    >
      {children}
    </Typography>
  );
}

export default TextComponent;
