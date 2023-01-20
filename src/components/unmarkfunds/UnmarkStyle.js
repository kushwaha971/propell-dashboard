import { Box, styled } from "@mui/material";

const UnmarkStyle = styled(Box)(({ theme }) => ({
  ".backBtnStyle": {
    margin: "5px",
    fontFamily: "League Spartan",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "18px",
    color: "#1C1D21",
    textTransform: "none",
  },
  ".headingTextStyle": {
    marginTop: "25px",
    padding: " 0px 20px",
    fontFamily: "League Spartan",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#1C1D21",
  },
  ".subHeadingTextStyle": {
    padding: "8px 25px",
    fontFamily: "League Spartan",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#8181A5",
  },
  ".fundsTextStyle": {
    padding: " 0px 20px",
    marginTop: "10px",
    fontFamily: "League Spartan",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "16px",
    color: "#8181A5",
  },
  ".fundNameStyle": {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#1C1D21",
  },
  ".fundMarkValueStyle": {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8181A5",
  },
  ".paperStyle": {
    borderRadius: "8px",
    margin: "5px",
    padding: "5px",
    display: "flex",
  },
  ".unmarkBtnStyle": {
    margin: " 12px",
    background: "#EF4F53",
    borderRadius: "150px",
    padding: "16px",
    marginTop: "16px",
    fontFamily: "League Spartan",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "16px",
    textTransform: "none",
    "&: hover": {
      color: "#EF4F53",
      background: "#ffffff",
    },
  },
  ".bottomContainerStyle": {
    margin: "0px -8px",
    marginTop: "32px",   
    bottom: "-10",
   
  },
  ".bottomPaperStyle": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  ".bottomTextBoxStyle": {
    margin: " 0px 12px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 20px",
  },
  ".creditTextStyle": {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#36383F",
  },
  ".CreditValueStyle": {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1C1D21",
  },
}));
export default UnmarkStyle;
