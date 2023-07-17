import * as React from 'react';
import IconButton from '@mui/material/IconButton';

export default function CustomIconButton({ color, disabled, icon }) {
    return (
        <IconButton color={color} disabled={disabled}>
            {icon}
        </IconButton>
    );
}