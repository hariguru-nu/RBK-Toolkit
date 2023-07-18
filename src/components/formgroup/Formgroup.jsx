import * as React from 'react';
import { FormGroup } from '@mui/material';

const formGroup = ({
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
      < FormGroup
        container={container}
        className={className}
        lg={lg}
        md={md}
        xs={xs}
        item={item}
        {...rest}
      >
        {children}
      </ FormGroup>
    );
  };
  
  export default formGroup;