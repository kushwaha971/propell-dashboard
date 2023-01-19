import { Box, Button, Dialog, styled, Typography } from "@mui/material";
import React from "react";
import image from "../images/Image.svg";

const PopupStyle = styled(Box)(({ theme }) => ({
  ".popupContainer": {
    // padding:"50px",
    margin: "25px",
  },
}));

function Popup(props) {
  return (
    <PopupStyle>
      <Dialog open={props.popup} onClose={props.setPopup}>
        <Box
          // className="popupContainer"
          sx={{ padding: "25px" }}
        >
          <Typography>
            Are you sure you want to unmark these funds as collateral?
          </Typography>
          <img src={image} style={{ height: "187px", width: "254.88px" }} />
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
