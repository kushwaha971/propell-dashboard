import { Box, Button, Dialog, styled, Typography } from "@mui/material";
import React from "react";
import colletralFundsImage from "../images/ColletralImg.svg";

const PopupStyle = styled(Box)(({ theme }) => ({
  ".popupContainer": {
   
    margin: "25px",
  },
}));

function Popup(props) {
  return (
    <PopupStyle>
      <Dialog open={props.popup} onClose={props.setPopup}>
        <Box
          
          sx={{ padding: "25px" }}
        >
          <Typography>
            Are you sure you want to unmark these funds as collateral?
          </Typography>
          <img src={colletralFundsImage}  alt="Colletral-Funds-Image" style={{ height: "187px", width: "254.88px" }} />
          <Typography>
            Your Credit line value will decrease. New Credit Line Value ₹ 23000
          </Typography>
          <Box>
            <Button onClick={() => props.setPopup(!props.popup)}>
              Go back
            </Button>
            <Button onClick={() => props.setPopup(!props.popup)}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Dialog>
    </PopupStyle>
  );
}

export default Popup;
