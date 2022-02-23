import React from "react";
import { Toolbar } from "@mui/material";
import TextComponent from "../Text/textComponent";
function ToolBar({ children }: any) {
  return (
    <Toolbar>
      <TextComponent variant="h6" color="inherit">
        {children}
      </TextComponent>
    </Toolbar>
  );
}

export default ToolBar;
