import React, { forwardRef } from 'react';
import Section from '../Section';
import PropTypes from 'prop-types';
import { Paper, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const activities =
{
    '2020': [
        { role: 'Lab Assistant', event: 'Computer and Networking', detail: 'Helping lecturer on teaching practical skills to students. Networking in Computer Science refers to the technologies and processes involved in connecting computer systems to enable communication and data exchange. This includes the design, implementation, and management of computer networks, protocols, and services, such as the Internet, LANs, WANs, and wireless networks. The study of networking covers topics such as network architecture, network security, network performance, and network protocols.' },
        { role: 'Lab Assistant', event: 'Object-Oriented Programming', detail: 'Helping lecturer on teaching practical skills to students. Object-Oriented Programming (OOP) is a programming paradigm that focuses on the use of objects and their interactions to design and implement software systems. In OOP, an object is an instance of a class that encapsulates data and the methods (functions) that operate on that data.' },
        { role: 'Lab Assistant', event: 'Database', detail: ' Helping lecturer on teaching practical skills to students. Database involves designing, creating, and managing databases, which are structured collections of data that can be stored, retrieved, and manipulated using specialized software called a database management system (DBMS).' },
        { role: 'Lab Assistant', event: 'Platform Programming', detail: 'Helping lecturer on teaching practical skills to students. Platform Programming involves developing software applications that run on a specific platform, such as an operating system, hardware, or software environment.' }
    ],
    '2019': [
        { role: 'Lab Assistant', event: 'Algorithm and Programming', detail: 'Helping lecturer on teaching practical skills to students. An algorithm is a step-by-step procedure for solving a problem or performing a task. In computer science, algorithms are often expressed as code, which can be written in a programming language. Algorithms can be used for a wide range of tasks, including sorting data, searching for information, and performing calculations.' },
        { role: 'Lab Assistant', event: 'Data Structure', detail: "Helping lecturer on teaching practical skills to students. Data Structures are a way of organizing and storing data in a computer's memory or on a disk. They are used to represent and manipulate data in a way that is efficient and easy to access. Common data structures include arrays, lists, trees, graphs, and hash tables. Each data structure has its own strengths and weaknesses, and the choice of data structure can greatly affect the performance of a program." },
        { role: 'Lab Assistant', event: 'Operating System', detail: 'Helping lecturer on teaching practical skills to students. An operating system (OS) is a software program that manages computer hardware and software resources and provides common services for computer programs. The OS is responsible for managing computer resources such as memory, processing power, input/output devices, and storage devices. It provides a user interface that allows users to interact with the computer and its resources.' }
    ],
    '2018': [
        { role: 'Speaker', event: 'Basic Computer Training "Marking Up Your Future With Web Programming"', detail: 'I deliver material such as process of creating, building, and maintaining websites, web applications, and other digital products that are accessed through the internet. It involves writing code in programming languages such as HTML, CSS, and JavaScript to create interactive, dynamic, and responsive web pages.' },
        { role: 'Lab Assistant', event: 'Basic Programming', detail: 'Helping lecturer on teaching practical skills to students. Basic Programming refers to the fundamental concepts and principles of computer programming. It includes learning the basic building blocks of programming such as variables, data types, operators, control structures, functions, and loops.' }
    ],
    '2017': [
        { role: 'Participant', event: 'ICICoS (International Conference on Informatics and Computational Sciences)', detail: 'International Conference on Informatics and Computational Sciences is annual conference organized by Department of Informatics, Faculty of Science and Mathematics, Universitas Diponegoro, Semarang Indonesia. The purpose of this conference is to provide a forum for scientists, engineers and researchers to discuss and exchange novel ideas, results, experiences and work-in-process in the field of informatics and computational science.' }
    ],
    '2016': [
        { role: 'Indonesia Delegate', event: 'SAEYLS 2016 Kuala Lumpur, Malaysia', detail: "Sri Aman Environmental Youth Leadership Summit (SAEYLS) 2016 would serve as a platform to spread the environmental awareness and inculcate leadership skills of the youths from the globe, hone and develop the leadership skills and abilities of youths to enable them to lead the global community of tomorrow to be highly environmental-conscious as well as embrace environmental-friendly lifestyles. As leaders of tomorrow, youths can improve the quality of life for God's creations." }
    ],
    '2014': [
        { role: 'Head of Communication and Informatics Field', event: 'Student Council of SMAN 1 Gunung Talang', detail: 'The Intra-School Student Organization (abbreviated as OSIS) is an organization at the school level in Indonesia. The Student Council is taken care of and managed by students who are selected to become the OSIS administrators. Usually this organization has a teacher supervisor who is selected by the school.' }
    ],
};

const activitiesYear = Object.keys(activities).sort((a, b) => b.localeCompare(a));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

const Activities = forwardRef((props, ref) => {
    const [tabActive, setTabActive] = React.useState(0);
    const [accordionExpanded, setAccordionExpanded] = React.useState('panel1');
    
    const handleTabChange = (event, newValue) => {
        setTabActive(newValue);
        setAccordionExpanded('panel1');
    };
    const handleChangeAccordionExpanded = (panel) => (event, newExpanded) => {
        setAccordionExpanded(newExpanded ? panel : false);
    };

    return (
        <div id='activities' ref={ref} {...props} style={{ paddingTop: '5vh' }}>
            <Section num='3' title='Activities' id='activities'>
                <Paper sx={{ bgcolor: '#8791af', display: 'flex', width: { xs: '295px', sm: '500px', md: '800px' }, height: '60vh' }} >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        scrollButtons="auto"
                        value={tabActive}
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
                            <Tab key={index} label={year} {...allyProps(index)} sx={{ fontWeight: 700, color: '#0a192f', fontSize:{ xs: '10px', sm: '12px', md: '16px' } }}/>
                        ))}
                    </Tabs>
                    {activitiesYear.map((year, index) => (
                        <TabPanel value={tabActive} index={index} key={index}>
                            {activities[year].map((activity,yearIndex) => (
                                <Box sx={{ width: { xs: '180px', sm: '350px', md: '650px' } }} key={yearIndex}>
                                    <Accordion sx={{ backgroundColor: '#8791af' }} expanded={ accordionExpanded === 'panel'+(yearIndex+1) } onChange={handleChangeAccordionExpanded('panel'+(yearIndex+1))}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={'panel'+(yearIndex+1)+'bh-content'}
                                            id={'panel'+(yearIndex+1)+'bh-header'}
                                        >
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography sx={{ flexShrink: 0, color: '#5ceaca', fontSize:{ xs: '7px', sm: '12px', md: '16px' } }}>
                                                        {activity.role}
                                                    </Typography>
                                                </Grid>
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
                </Paper>
            </Section>
        </div>
    )
});

export default Activities;