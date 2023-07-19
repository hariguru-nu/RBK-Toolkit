import { makeStyles } from "@mui/material";
import MuiTooltip from "@mui/material/Tooltip";

const useStyles = makeStyles(() => ({
  customWidth: {
    maxWidth: 500,
  },
}));

const Tooltip = ({ title, placement, children, ...restOfProps }) => {
  const classes = useStyles();

  <MuiTooltip
    title={title}
    placament={placement}
    classes={{ tooltip: classes.customWidth }}
    {...restOfProps}
  >
    {children}
  </MuiTooltip>;
};

export default Tooltip;
