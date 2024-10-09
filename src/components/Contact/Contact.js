import React, { forwardRef } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { motion } from "framer-motion";
import Section from '../Section';
import fb from './../../images/fb.svg';
import ig from './../../images/ig.svg';
import line from './../../images/line.svg';
import linkedin from './../../images/linkedin.svg';
import twitter from './../../images/twitter.svg';
import wa from './../../images/wa.svg';
import yt from './../../images/yt.svg';

const contacts =
    [
        {name: 'LinkedIn', src: linkedin, link: 'https://www.linkedin.com/in/fauzan-el-ardhi/'},
        {name: 'Instagram', src: ig, link: 'https://www.instagram.com/d4rabi/'},
        {name: 'Facebook', src: fb, link: 'https://www.facebook.com/d4rabi'},
        {name: 'WhatsApp', src: wa, link: 'https://wa.me/6282288516526'},
        {name: 'Line', src: line, link: 'https://line.me/R/ti/p/rz5v7Atg54'},
        {name: 'Twitter', src: twitter, link: 'https://twitter.com/IMalfith'},
        {name: 'YouTube', src: yt, link: 'https://www.youtube.com/channel/UC32NRgEQ1G4gcfxwwH9vMmQ'}
    ];

const Contact = forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props}>
            <Section num='6' title='Contact'>
                <Paper sx={{ p: { xs: '8px', sm: '12px', md: '18px' }, bgcolor: '#8791af', justifyContent: 'center', maxHeight: '50vh', maxWidth: '80vw', overflow: 'auto'  }}>
                    <Typography variant='h6' align= 'center' sx={{color: '#0a192f', fontSize: { xs: '18px', sm: '24px', md: '28px' }, fontWeight: 700}}>
                        Please feel free to contact me if you have any questions or if you are interested in working together.
                    </Typography>
                    <Box sx={{ justifyContent: 'center', display: 'flex', my: '10% ' }}>
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.8, rotate: -5, borderRadius: "100%" }}
                            >
                                <Box sx={{ mx: '1vw', height: '8vh', width: 'auto' }}>
                                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                        <img src={contact.src} alt={contact.name} style={{ height: '100%', width: '100%' }}/>
                                    </a>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Paper>
            </Section>
        </div>
    )
});

export default Contact;