import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBox({ ...rest }) {
    return (
        <div>
            <Checkbox {...rest} />
        </div>
    );
}
