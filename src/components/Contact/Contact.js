import React, { forwardRef } from 'react';
import Section from '../Section';
import { Paper, Typography, Box } from '@mui/material';
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
        {name: 'Instagram', src: ig, link: 'https://www.instagram.com/alfith.d.arabi/'},
        {name: 'YouTube', src: yt, link: 'https://www.youtube.com/channel/UC32NRgEQ1G4gcfxwwH9vMmQ'},
        {name: 'Line', src: line, link: 'https://line.me/R/ti/p/rz5v7Atg54'},
        {name: 'WhatsApp', src: wa, link: 'https://wa.me/6282288516526'},
        {name: 'Facebook', src: fb, link: 'https://www.facebook.com/alfith.ardi'},
        {name: 'Twitter', src: twitter, link: 'https://twitter.com/IMalfith'}
    ];

const Contact = forwardRef((props, ref) => {
    return (
        <div id='contact' ref={ref} {...props} style={{ paddingTop: '5vh' }}>
            <Section num='6' title='Contact'>
                <Paper sx={{ p: { xs: '8px', sm: '12px', md: '18px' }, bgcolor: '#8791af', justifyContent: 'center', width: { xs: '260px', sm: '500px', md: '800px' } }}>
                    <Typography variant='h6' align= 'center' sx={{color: '#0a192f', fontSize: { xs: '18px', sm: '24px', md: '28px' }, fontWeight: 700}}>
                        Please feel free to contact me if you have any questions or if you are interested in working together.
                    </Typography>
                    <Box sx={{ justifyContent: 'center', display: 'flex', mt: '64px' }}>
                        {contacts.map((contact, index) => (
                            <Box key={index} sx={{ mx: { xs: '8px', md: '16px' }, height: '48px', width: 'auto' }}>
                                <a href={contact.link} target="_blank"  rel="noopener noreferrer">
                                    <img src={contact.src} alt={contact.name} style={{ height: '100%', width: '100%' }}/>
                                </a>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Section>
        </div>
    )
});

export default Contact;