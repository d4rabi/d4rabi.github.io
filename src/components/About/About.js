import React, { forwardRef } from 'react';
import { Grid, Typography, Box} from '@mui/material';
import Section from '../Section';
import styles from "./about.module.css";
import fauzan from './../../images/fauzan.jpg';

const About = forwardRef((props, ref) => {
    return (
        <div id='about' ref={ref} {...props} style={{ paddingTop: '5vh' }}>
            <Section num='0' title='About'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} my='12px'>
                        <Typography
                            color='#8791af' 
                            variant='p'
                            sx={{
                                fontWeight: 500,
                                fontAlign: 'justify',
                                fontSize: {xs: '10px', md: '18px'}
                            }}
                        >
                            Hello!, My name is Fauzan I am a highly motivated and dedicated individual with a passion for technology and a strong desire to continuously learn and improve my skills.
                            I have excellent analytical skills and the ability to understand user requirements quickly. My strong work ethic and ability to work well in a team make me a valuable asset to any project.
                            I have several years of experience as both a <Typography color='#5ceaca' variant='p'>BackEnd</Typography> and <Typography color='#5ceaca' variant='p'>FullStack</Typography> Developer. I possess a strong technical skillset, including proficiency in various <Typography color='#5ceaca' variant='p'>programming languages</Typography> and <Typography color='#5ceaca' variant='p'>frameworks</Typography>.
                            Throughout my career, I have worked on a variety of projects and have consistently delivered high-quality results.
                            My portfolio showcases some of my best work, including <Typography color='#5ceaca' variant='p'>web development projects</Typography>, as well as some personal projects that I have developed in my free time.
                            I am always looking for new opportunities to challenge myself and further develop my skills.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}  my='24px'
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box>
                            <div className={styles.card}>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.cardInner}>
                                    <img src={fauzan} alt="Fauzan" style={{ height: '240px', width: '190px' }}/>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
});

export default About;