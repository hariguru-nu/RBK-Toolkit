import React from 'react';
import { Box as MUIBox } from '@mui/material';

const Box = ({ component, className, children, ...rest }) => {
    return (
        <MUIBox
            className={className}
            component={component}
            sx={{
                ...rest.sx
            }}
        >
            {children}
        </MUIBox>
    );
};

export default Box;
