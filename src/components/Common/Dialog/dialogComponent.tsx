import React from "react";
import Dialog from "@material-ui/core/Dialog";
function DialogComponent({ open, onClose, children }: any) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      {children}
    </Dialog>
  );
}

export default DialogComponent;
