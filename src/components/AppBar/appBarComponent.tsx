import React from "react";
import AppBar from "@material-ui/core/AppBar";
function AppBarComponent({ children }: any) {
  return <AppBar style={{ background: "ocean" }}>{children}</AppBar>;
}

export default AppBarComponent;
