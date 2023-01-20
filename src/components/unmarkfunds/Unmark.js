import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import UnmarkStyle from "./UnmarkStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router";
import CheckBox from "./CheckBox";
import Popup from "../popup/Popup";

function Unmark() {
  const nevigate = useNavigate();
  const [popup, setPopup] = React.useState(false);

  return (
    <React.Fragment>
      <UnmarkStyle>
        <Box>
          <Button
            className="backBtnStyle"
            onClick={() => {
              nevigate("/");
            }}
          >
            <ArrowBackIosIcon /> Back
          </Button>
          <Typography className="headingTextStyle">
            Unmark funds as collateral
          </Typography>
          <Typography className="subHeadingTextStyle">
            Select the funds you wish to unmark as collateral
          </Typography>
          <Typography className="fundsTextStyle">
            {" "}
            List of mututal funds-
          </Typography>
          <CheckBox />
          <Box className="bottomContainerStyle">
            <Paper className="bottomPaperStyle">
              <Box className="bottomTextBoxStyle">
                <Typography className="creditTextStyle">
                  New Credit Line Value
                </Typography>
                <Typography className="CreditValueStyle">₹ 23000</Typography>
              </Box>
              <Button
                variant="contained"
                className="unmarkBtnStyle"
                onClick={() => setPopup(!popup)}
              >
                Unmark funds
              </Button>
            </Paper>
          </Box>
        </Box>
      </UnmarkStyle>
      <Popup popup={popup} setPopup={setPopup} />
    </React.Fragment>
  );
}

export default Unmark;
