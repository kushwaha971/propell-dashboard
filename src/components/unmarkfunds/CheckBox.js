import { Box, Checkbox, Paper, Typography } from "@mui/material";
import React from "react";
import FundList from "./FundList";
import UnmarkStyle from "./UnmarkStyle";

function CheckBox() {
  const [data, setData] = React.useState(FundList);
  const handleChange = (id) => {
    const copyList = [...data];
    const modifiedList = copyList.map((list) => {
      if (id === list.id) {
        list.flag = !list.flag;
      }
      return list;
    });
    setData(modifiedList);
  };

  return (
    <UnmarkStyle>
      <Box sx={{ marginTop: "20px" }}>
        {data.map((list) => {
          return (
            <Box key={list.id}>
              <Paper
                className="paperStyle"
                sx={{
                  border: list.flag ? "1px solid #5516AA" : "none",
                }}
              >
                <Checkbox
                  sx={{
                    color: "#C3D0FB",
                    "&.Mui-checked": {
                      color: " #5516AA",
                    },
                  }}
                  id={list.id.toString()}
                  checked={list.flag}
                  onChange={() => handleChange(list.id)}
                />
                <Box sx={{ margin: "5px" }}>
                  <Typography className="fundNameStyle">
                    {list.fund_name}
                  </Typography>
                  <Typography className="fundMarkValueStyle">
                    Marked value ₹ {list.marked_value}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Box>
    </UnmarkStyle>
  );
}

export default CheckBox;
