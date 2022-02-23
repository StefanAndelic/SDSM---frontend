import React from "react";
import IconButton from "@material-ui/core/IconButton";

function NavLink({ color, onClick, children }: any) {
  return (
    <IconButton color={color} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default NavLink;
