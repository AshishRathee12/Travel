import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [isOnline, setIsOnline] = useState(true)
  // const [open, setOpen] = useState(true);

  function InternetErrMessanger() {
    if (navigator.onLine === true) {
      // window.location.reload(false);
      setIsOnline(true);
    }
    if (navigator.onLine === false) {
      setIsOnline(false);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(InternetErrMessanger, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {
        isOnline ? "" : (
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
              <Alert severity="warning"
                className='mb-0'
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Not conected to the internet. Please check your connection. Some functionalities may not be available.
              </Alert>
            </Collapse>
          </Box>
        )
      }
    </>
  )
}
