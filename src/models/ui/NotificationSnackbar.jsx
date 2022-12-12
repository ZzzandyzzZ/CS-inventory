import { Alert, Snackbar } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { restartNotif } from '../../store/notification/notificationSlice';

export function NotificationSnackbar() {
  const dispatch = useDispatch();
  const { message, show, type } = useSelector((state) => state.notification);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(restartNotif());
  };

  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export function successNotif(message) {
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar(message, { variant: 'success' });
}

export function errorNotif(message) {
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar(message, { variant: 'error' });
}
