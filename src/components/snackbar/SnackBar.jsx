import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({ label, severity, onClose }) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={true} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }} >
          {label}
        </Alert>
      </Snackbar>

    </Stack>
  );
}