import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { IPopUpModal } from "../../Utils/interfaces";
import { Image } from "./Image";
import { Button, Dialog, DialogActions } from "@mui/material";

export default function PopUpModal(props: IPopUpModal) {
  const [open, setOpen] = useState(true);
  const {
    header,
    message,
    severity = "error",
    image,
    btnText,
    secondBtnText,
    btnColor = "primary",
    secondBtnColor = "error",
    btnAction,
    secondBtnAction,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="pop-up-modal">
      <Dialog open={open}>
          <Alert variant="filled" severity={severity} icon={false} className="pop-up-alert">
            <h5><b>{header}</b></h5>
            <h6>{message}</h6>
            {image === undefined ? null : (
              <>
              <p>Here is your coupon:</p>
              <Image src={image} width={200} height={100} />
              </>
            )}
          </Alert>
          <DialogActions className="pop-up-btn">
            <Button
              color={btnColor}
              onClick={btnAction ? btnAction : handleClose}
            >
              {btnText}
            </Button>
            {secondBtnText ? (
              <Button color={secondBtnColor} onClick={secondBtnAction}>
                {secondBtnText}
              </Button>
            ) : null}
          </DialogActions>
      </Dialog>
    </div>
  );
}
