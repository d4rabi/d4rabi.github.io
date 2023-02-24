import React from 'react'
import { Grid, Typography, Box, Divider, Paper } from '@mui/material';

function Section(prop) {
    return (
        <Paper
            id={prop.id}
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                mx: { xs: '10vw', md: '20vw' },
                my: '5vh',
                backgroundColor: 'inherit'
            }}
            style={{ marginTop: '-5vh' }}
        >
            <Grid container sx={{ mb: '8vh' }}>
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                        <Typography
                            color='#5ceaca'
                            variant='h1'
                            sx={{ fontSize: '22px', fontWeight: 700 }}
                        >
                            [{prop.num}]
                        </Typography>
                        <Typography
                            color='#8791af'
                            variant='h1'
                            sx={{ fontSize: '32px', fontWeight: 700 }}
                        >
                            {prop.title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={6} lg={8}>
                    <Divider sx={{ borderBottomWidth: '4px', mt: '14px', backgroundColor: '#5ceaca' }} />
                </Grid>
            </Grid>
            {prop.children}
        </Paper>
    )
}

export default Section;