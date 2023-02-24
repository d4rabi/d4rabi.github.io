import React, { forwardRef, useState } from 'react';
import { Grid, Typography, Paper, Modal, Backdrop, Fade, Box } from '@mui/material';
import { motion } from "framer-motion";
import Section from '../Section';
import styles from "./about.module.css";
import fauzan from './../../images/fauzan.jpg';

const About = forwardRef((props, ref) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div ref={ref} {...props}>
            <Section num='0' title='About'>
                <Paper elevation={0} sx={{ bgcolor: '#0a192f', display: 'flex', height: '50vh', maxWidth: '80vw', overflow: 'auto' }} >
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
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.8, rotate: -5, borderRadius: "100%" }}
                            onClick={handleOpenModal}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles.card}>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.cardInner}>
                                    <img src={fauzan} alt="Fauzan" style={{ height: '240px', width: '190px' }}/>
                                </div>
                            </div>
                        </motion.div>
                        </Grid>
                    </Grid>
                </Paper>
            </Section>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}
            >
                <Fade in={openModal}>
                <Box
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute'
                    }}
                >
                    <img src={fauzan} alt="Fauzan" style={{ height: '75%', width: 'auto' }}/>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
});

export default About;