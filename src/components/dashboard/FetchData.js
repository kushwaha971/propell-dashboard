import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import DashboardStyle from "../css/DashboardStyle";

function FetchData() {
  const [myData, setMyData] = React.useState([]);
  const API = "https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7";

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      setMyData(res.data.portfolio);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData(API);
  }, []);

  return (
    <DashboardStyle>
      <Box sx={{ marginBottom: "70px" }}>
        {myData.map((data, indx) => {
          return (
            <Box className="fetchDataContainerStyle" key={indx}>
              <Typography className="textStyle">{data.scheme_name}</Typography>
              <Box className="dataContainer">
                <Typography className="dataKeyStyle">Current Value</Typography>
                <Typography className="currentValueStyle">
                  ${data.current_value}
                </Typography>
                <Typography className="dataKeyStyle">Units</Typography>
                <Typography className="dataValueStyle">{data.units}</Typography>
              </Box>
              <Box className="dataContainer">
                <Typography className="dataKeyStyle">Folio Number</Typography>
                <Typography className="dataValueStyle">
                  <span style={{ color: "#5516AA" }}>{data.folio_number}</span>
                </Typography>
                <Typography className="dataKeyStyle">Nav</Typography>
                <Typography className="dataValueStyle">
                  <span style={{ color: "#5516AA" }}> {data.nav}</span>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </DashboardStyle>
  );
}

export default FetchData;
