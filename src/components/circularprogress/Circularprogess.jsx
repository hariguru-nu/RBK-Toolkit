import React from "react";
import { CircularProgress as MUI } from '@mui/material';



export default function CircularProgress ({ ...rest }) {
    return (
        <MUI>
            <CircularProgress  {...rest} />
        </MUI>
    );
}