import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
function DialogueTitleComponent({ id, children }: any) {
  return <DialogTitle id={id}>{children}</DialogTitle>;
}

export default DialogueTitleComponent;
