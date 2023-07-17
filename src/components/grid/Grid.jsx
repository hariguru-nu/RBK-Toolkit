import React from "react";
import GridComponent from "@mui/material/Grid";
const Grid = ({
  item,
  children,
  className,
  container,
  lg,
  md,
  xs,
  ...rest
}) => {
  return (
    <GridComponent
      container={container}
      className={className}
      lg={lg}
      md={md}
      xs={xs}
      item={item}
      {...rest}
    >
      {children}
    </GridComponent>
  );
};

export default Grid;