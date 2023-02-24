import React, { forwardRef } from 'react';
import Section from '../Section';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { works } from '../../data/staticData';

const Works = forwardRef((props, ref) => {
    const [accordionExpanded, setAccordionExpanded] = React.useState('panel1');

    const handleChangeAccordionExpanded = (panel) => (event, newExpanded) => {
        setAccordionExpanded(newExpanded ? panel : false);
    };

    return (
        <div id='work' ref={ref} {...props} className='section'>
            <Section num='4' title='Works'>
                <Box sx={{ height: '50vh', width: '80vw', overflow: 'auto' }}>
                    {works.map((work, index) => (
                        <Paper key={index} sx={{ bgcolor: '#8791af', display: 'flex' }}>
                            <Accordion sx={{ backgroundColor: '#8791af' }} expanded={ accordionExpanded === 'panel'+(index+1) } onChange={handleChangeAccordionExpanded('panel'+(index+1))}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={'panel'+(index+1)+'bh-content'}
                                    id={'panel'+(index+1)+'bh-header'}
                                >
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <Typography sx={{ flexShrink: 0, color: '#5ceaca', fontSize:{ xs: '9px', sm: '17px', md: '22px' } }}>
                                                {work.year}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ color: '#0a192f', fontSize:{ xs: '8px', sm: '16px', md: '20px' } }}>
                                                {work.role}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: '#0a192f', fontSize:{ xs: '8px', sm: '16px', md: '20px' } }}>
                                        {work.detail}
                                    </Typography>
                                    <br/>
                                    <Typography sx={{ color: '#0a192f', fontSize:{ xs: '8px', sm: '16px', md: '20px' } }}>
                                        Techstack: {work.techstack}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    ))};
                </Box>
            </Section>
        </div>
    )
});

export default Works;