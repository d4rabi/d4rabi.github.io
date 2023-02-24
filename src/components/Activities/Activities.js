import React, { forwardRef } from 'react';
import Section from '../Section';
import { Paper, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { activities } from '../../data/staticData';

const activitiesYear = Object.keys(activities).sort((a, b) => b.localeCompare(a));

const Activities = forwardRef((props, ref) => {
    const [tabActive, setTabActive] = React.useState('0');
    const [accordionExpanded, setAccordionExpanded] = React.useState('panel1');
    
    const handleTabChange = (event, newValue) => {
        setTabActive(newValue);
        setAccordionExpanded('panel1');
    };
    const handleChangeAccordionExpanded = (panel) => (event, newExpanded) => {
        setAccordionExpanded(newExpanded ? panel : false);
    };

    return (
        <div id='activity' ref={ref} {...props} className='section'>
            <Section num='3' title='Activities'>
                <Paper sx={{ bgcolor: '#8791af', display: 'flex', height: '50vh', width: '80vw', overflow: 'auto' }} >
                <TabContext value={tabActive}>
                    <TabList
                        orientation="vertical"
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={handleTabChange}
                        sx={{
                            '& button:hover': {backgroundColor: '#0a192f', color: '#5ceaca'},
                            '& button.Mui-selected': {backgroundColor: '#0a192f', color: '#5ceaca'},
                        }}
                        TabIndicatorProps={{
                            sx: { backgroundColor: '#5ceaca' }
                        }}
                    >
                        {activitiesYear.map((year, index) => (
                            <Tab key={index} label={year} value={index.toString()} sx={{ fontWeight: 700, color: '#0a192f', fontSize:{ xs: '10px', sm: '12px', md: '16px' } }}/>
                        ))}
                    </TabList>
                        {activitiesYear.map((year, index) => (
                            <TabPanel value={index.toString()} key={index} >
                                {activities[year].map((activity,yearIndex) => (
                                    <Box sx={{ width: { xs: '180px', sm: '350px', md: '650px' } }} key={yearIndex}>
                                        <Accordion sx={{ backgroundColor: '#8791af' }} expanded={ accordionExpanded === 'panel'+(yearIndex+1) } onChange={handleChangeAccordionExpanded('panel'+(yearIndex+1))}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={'panel'+(yearIndex+1)+'bh-content'}
                                                id={'panel'+(yearIndex+1)+'bh-header'}
                                            >
                                                <Grid container>
                                                    <Grid item xs={4}>
                                                        <Typography sx={{ flexShrink: 0, color: '#5ceaca', fontSize:{ xs: '7px', sm: '12px', md: '16px' } }}>
                                                            {activity.role}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}></Grid>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ color: '#0a192f', fontSize:{ xs: '6px', sm: '12px', md: '16px' } }}>
                                                            {activity.event}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography sx={{ color: '#0a192f', fontSize:{ xs: '6px', sm: '12px', md: '16px' } }}>
                                                    {activity.detail}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                ))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Paper>
            </Section>
        </div>
    )
});

export default Activities;