import React, { forwardRef } from 'react';
import Section from '../Section';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const works =
    [
        {year: 'January 2019 - May 2019', role: 'BackEnd Developer Intern', company: 'CIMB Niaga Tbk', detail: 'Internship as a Software Engineer in the Engineering Development unit of CIMB Niaga. Received tasks to develop software for internal use of CIMB Niaga. Engaged with other software engineers to improve the quality of the software being worked on.', techstack: 'Spring Boot, Java, Maven, Trello'},
        {year: 'November 2020 - May 2021', role: 'Project Manager / FullStack Developer Intern', company: 'BPTIK KEMENDIKBUD Center Java Region', detail: 'Internship as project manager and full-stack developer, My team and I create a Human Resource Information System using the waterfall method.', techstack: 'CodeIgniter 3, Bootstrap 4, draw.io, AdobeXD'}
    ];

const Works = forwardRef((props, ref) => {
    const [accordionExpanded, setAccordionExpanded] = React.useState('panel1');

    const handleChangeAccordionExpanded = (panel) => (event, newExpanded) => {
        setAccordionExpanded(newExpanded ? panel : false);
    };

    return (
        <div id='works' ref={ref} {...props} style={{ paddingTop: '5vh' }}>
            <Section num='4' title='Works'>
                <Box sx={{ height: '60vh' }}>
                    {works.map((work, index) => (
                        <Paper key={index} sx={{ bgcolor: '#8791af', display: 'flex', width: { xs: '295px', sm: '500px', md: '800px' } }}>
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