import { Box, Button, Dialog, Typography } from "@mui/material";
import React from "react";
import PopupStyle from "../css/PopupStyle";
import colletralFundsImage from "../../images/ColletralImg.svg";

function Popup(props) {
  return (
    <Dialog
      open={props.popup}
      onClose={props.setPopup}
      sx={{
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <PopupStyle>
        <Box>
          <Typography className="popupHeadingStyle">
            Are you sure you want to unmark these funds as collateral?
          </Typography>

          <img
            src={colletralFundsImage}
            alt="colletral-fund"
            className="popupImageStyle"
          />

          <Typography className="popupCreditLineTextStyle">
            Your Credit line value will decrease.
            <br />{" "}
            <span style={{ color: "#1C1D21" }}>
              New Credit Line Value ₹ 23000
            </span>
          </Typography>
          <Box className="popUpButtonContainerStyle">
            <Button
              className="popupBackBtnStyle"
              variant="contained"
              onClick={() => props.setPopup(!props.popup)}
            >
              Go back
            </Button>
            <Button
              className="popupConfirmBtnStyle"
              variant="contained"
              onClick={() => props.setPopup(!props.popup)}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </PopupStyle>
    </Dialog>
  );
}

export default Popup;
