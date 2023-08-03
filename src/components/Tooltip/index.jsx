// import { makeStyles } from "@mui/styles";
// import { withStyles } from "@mui/styles";
// import { Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  zIndex: theme.zIndex.tooltip + 1,
  //margin: 4,
  [`& .MuiTooltip-tooltip`]: {
    maxWidth: 200,
    fontFamily: "'Grape Nuts', Helvetica",
    fontSize: 12,
    backgroundColor: "#464A50",
    padding: "5px 10px",
    whiteSpace: "pre-line",
    border: "solid yellow 1px",
    marginTop: "0 !Important",
  }
}));

export default StyledTooltip;