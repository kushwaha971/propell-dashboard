import { Box, Typography } from "@mui/material";
import React from "react";
import DashboardStyle from "../css/DashboardStyle";
import { portfolioDetails } from "../services/GetService";

function GetPortfolioDetails() {
  const [myData, setMyData] = React.useState([]);

  // Get protfolioDatils from API
  const getportfolioDetails = async () => {
    try {
      const res = await portfolioDetails.get();
      setMyData(res.data.portfolio);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getportfolioDetails();
  }, []);
  return (
    <DashboardStyle>
      <Box sx={{ marginBottom: "70px" }}>
        {myData.map((data, indx) => {
          return (
            <Box className="dataContainerStyle" key={indx}>
              <Typography className="textStyle">{data.scheme_name}</Typography>
              <Box sx={{ display: "flex" }}>
                <div className="dataContainer">
                  <div className="portfolioDivStyile">
                    <Typography className="dataKeyStyle">
                      Current Value
                    </Typography>
                    <Typography className="currentValueStyle">
                      ${data.current_value.toFixed(4)}
                    </Typography>
                  </div>
                  <div className="portfolioDivStyile">
                    <Typography className="dataKeyStyle">
                      Folio Number
                    </Typography>
                    <Typography className="dataValueStyle">
                      <span style={{ color: "#5516AA" }}>
                        {data.folio_number}
                      </span>
                    </Typography>
                  </div>
                </div>
                <div className="dataContainer">
                  <div className="portfolioDivStyile">
                    <Typography className="dataKeyStyle">Units</Typography>
                    <Typography className="dataValueStyle">
                      {data.units}
                    </Typography>
                  </div>
                  <div className="portfolioDivStyile">
                    <Typography className="dataKeyStyle">Nav</Typography>
                    <Typography className="dataValueStyle">
                      <span style={{ color: "#5516AA" }}> {data.nav}</span>
                    </Typography>
                  </div>
                </div>
              </Box>
            </Box>
          );
        })}
      </Box>
    </DashboardStyle>
  );
}

export default GetPortfolioDetails;
