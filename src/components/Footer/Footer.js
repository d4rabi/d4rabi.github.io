import React from 'react';
import { AppBar, Typography } from '@mui/material';

function Footer() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0a192f', position: 'relative', bottom: 0, height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="p" textAlign="center" style={{ color: '#5ceaca', fontSize: '15px' }}>
                Designed & Built by Fauzan Idal Fithri El Ardhi
            </Typography>
        </AppBar>
    )
}

export default Footer;