import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PortfoliofetchStyle from "./PortFoliofetchStyle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router";

function Portfoliofetch() {
  const nevigate = useNavigate();
  return (
    <PortfoliofetchStyle>
      <Box sx={{ margin:"5px" }}>
        <Button 
          className="backBtnStyle"
          onClick={() => {
            nevigate("/");
          }}
        >
          <ArrowBackIosIcon /> Back
        </Button>
      </Box>
      <Typography className="headingTextStyle">
        Increase your credit limit
      </Typography>
      <Typography className="subHeadingTextStyle">
        Mark additional funds as collateral to increase your credit limit
        futher.
      </Typography>
      <Button variant="contained" className="btnStyle">
        <Typography className="btnTextStyle">
          Fetch my Kfin portfolio
        </Typography>
        <ArrowForwardIosIcon className="arrowBtnStyle" />
      </Button>
      <Button variant="contained" className="btnStyle">
        <Typography className="btnTextStyle">
          Fetch my CAMS portfolio
        </Typography>
        <ArrowForwardIosIcon className="arrowBtnStyle" />
      </Button>
      <Box className="bottomContainerStyle">
        <Typography className="bottomTextStyle">
          Make sure your overall MF portfoli is greater than Rs 25,000.
        </Typography>
        <Button variant="contained" className="bottomButtonStyle">
          Fetch my portfolio
        </Button>
      </Box>
    </PortfoliofetchStyle>
  );
}

export default Portfoliofetch;
