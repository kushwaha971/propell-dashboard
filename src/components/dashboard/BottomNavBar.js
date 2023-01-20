import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import DashboardStyle from "../css/DashboardStyle";


const style = {
  fontFamily: "League Spartan",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "16px",
};

function BottomNavBar() {
  const [value, setValue] = React.useState(1);

  return (
    <DashboardStyle>
      <Box className="bottomNavigationContainer">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            position: "fixed",
            bottom: 0,
            width: "1",
            "& .Mui-selected": {
              color: "#5516AA",
            },
          }}
          elevation={3}
        >
          <BottomNavigationAction
            label={<Typography sx={style}>Home</Typography>}
            icon={
              <HomeTwoToneIcon
                sx={{ color: value === 0 ? "#5516AA" : "none" }}
              />
            }
          />
          <BottomNavigationAction
            label={<Typography sx={style}>Portfolio</Typography>}
            icon={
              <PieChartOutlineOutlinedIcon
                sx={{ color: value === 1 ? "#5516AA" : "none" }}
              />
            }
          />
          <BottomNavigationAction
            label={<Typography sx={style}>Profile</Typography>}
            icon={
              <AccountCircleOutlinedIcon
                sx={{ color: value === 2 ? "#5516AA" : "none" }}
              />
            }
          />
        </BottomNavigation>
      </Box>
    </DashboardStyle>
  );
}

export default BottomNavBar;
