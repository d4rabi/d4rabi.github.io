import React, { forwardRef } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import styles from "./intro.module.css";

function Button(prop) {
    return(
        <a className={styles.button} href={prop.link} target="_blank" rel="noopener noreferrer">
            <span className={styles.topKey}></span>
            <span className={styles.text}>{prop.children}</span>
            <span className={styles.bottomKey1}></span>
            <span className={styles.bottomKey2}></span>
        </a>
    )
}

const Intro = forwardRef((props, ref) => {
    return (
        <div id='' ref={ref} {...props} className='section'>
            <Paper
                elevation={0}
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh',
                    mx: {xs: '10vh', md: '20vh'},
                    backgroundColor: '#0a192f'
                }}
                className='section'
            >
                <Typography 
                    color='#5ceaca' 
                    variant='h1'
                    sx={{
                        fontSize: { xs: '16px', sm: '36px', md: '24px' }, 
                        fontWeight: 700
                    }}
                >
                    Hello, my name is
                </Typography>
                <br/>
                <Typography 
                    color='#ccd6f6' 
                    variant='h2'
                    sx={{
                        fontSize: { xs: '36px', sm: '108px', md: '90px' },
                        fontWeight: 600
                    }}
                >
                    Fauzan Idal Fithri El Ardhi
                </Typography>
                <br/>
                <Typography 
                    color='#8791af' 
                    variant='h3'
                    sx={{
                        fontSize: { xs: '12px', sm: '24px', md: '20px' }, 
                        fontWeight: 700
                    }}
                >
                    ( FullStack | BackEnd | FrontEnd ).join( Developer );
                </Typography>
                <br/>
                <Typography 
                    color='#8791af' 
                    variant='p'
                    sx={{
                        my: '24px',
                        fontSize: { xs: '12px', sm: '24px', md: '20px' },
                        fontWeight: 500
                    }}
                    align='center'
                >
                    " Curiosity is the root of learning. "
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', my: '16px', fontSize: {xs:'10px', sm: '13px', md: '16px'}}}>
                    <Button link='https://github.com/d4rabi/resume/raw/master/Fauzan-Resume.pdf'>
                        Download My Resume
                    </Button>
                </Box>
            </Paper>
        </div>
    )
});

export default Intro;