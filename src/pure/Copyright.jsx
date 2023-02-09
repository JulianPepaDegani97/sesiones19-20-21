import { Link, Typography } from '@mui/material';
import React from 'react';


const Copyright = () => {
  return (
    <Typography variant='body2' align='center'>
        {'Copyright (C)'}
        <Link color="inherit" href='https://imaginaformacion.com'>
            Imagina Formación
        </Link>
    </Typography>
  )
}

export default Copyright