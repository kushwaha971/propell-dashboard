import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import DashboardStyle from "./DashboardStyle";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FetchData from "./FetchData";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router";

function Dashboard() {
  const nevigate = useNavigate();

  return (
    <React.Fragment>
      <DashboardStyle>
        <Box className="appbarStyle" elevation={0}>
          <Typography className="textNameStyle">
            Welcome <span style={{ color: "#36383F" }}>Rahul</span>
          </Typography>
          <IconButton sx={{ color: "#5516AA" }}>
            <NotificationsNoneRoundedIcon />
          </IconButton>
        </Box>
        <Box>
          <Box className="protfoliContainerStyle">
            <Typography className="loanTextStyle">
              Total portfolio value
            </Typography>
            <Typography className="healthyTextStyle">
              <span style={{ color: "#41C0D2" }}>₹ 1500000.00</span>
            </Typography>
          </Box>
        </Box>
        <Box className="boxContainerStyle">
          <Box>
            <Typography className="loanTextStyle">Loan to Value</Typography>
            <Typography className="healthyTextStyle">Healthy!!</Typography>
          </Box>
          <Button variant="contained" className="learnMoreButtonStyle">
            Learn more
          </Button>
        </Box>
        <Button
          variant="contained"
          className="creditBtnStyle"
          onClick={() => {
            nevigate("/kfin-portfolio-fetch");
          }}
        >
          Increase credit limit
        </Button>
        <Box className="fundsContainerStyle">
          <Box>
            <Typography className="fundsTextStyle">
              Marked mutual funds-
            </Typography>
          </Box>
          <Button
            variant="contained"
            className="fundsButtonStyle"
            onClick={() => {
              nevigate("/unmark-funds");
            }}
          >
            Unmark funds
          </Button>
        </Box>
        <FetchData />
        <BottomNavBar />
      </DashboardStyle>
    </React.Fragment>
  );
}

export default Dashboard;
