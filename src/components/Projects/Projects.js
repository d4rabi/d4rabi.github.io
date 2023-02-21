import React, { forwardRef } from 'react';
import Section from '../Section';
import { Paper, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const projects =
    [
        {name: 'Human Resource Information System', role: 'Project Manager / FullStack Developer', techstack: 'CodeIgniter 3, BootStrap 4', deployed: 'BPTIK DIKBUD Central Java', detail: 'A human resouces information system is a system to ensure the easy management of human resources for each section of the organization which includes fingerprint reader machine result automation reader to database, dashboard for employees, employee data management, and etc.'},
        {name: 'Web Generator', role: 'BackEnd Developer Intern', techstack: 'Java SpringBoot', deployed: 'CIMB Niaga Tbk', detail: 'A service written in Java SpringBoot and Apache Velocity that automatically creates fully functional back-end service API in Java SpringBoot and front-end in ReactJS without the need to create the source code from scratch which will improve the development time.'},
        {name: 'Approval Engine', role: 'BackEnd Developer Intern', techstack: 'Java SpringBoot', deployed: 'CIMB Niaga Tbk', detail: 'A service written in Java SpringBoot, Approval Engine using a linked list data structure to describe a matrix of data to make layer of approval which will be responsible to handle any approval that used by any system in CIMB Niaga Tbk.'}
    ];

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

const Projects = forwardRef((props, ref) => {
    const [tabActive, setTabActive] = React.useState(0);
    
    const handleTabChange = (event, newValue) => {
        setTabActive(newValue);
    };

    return (
        <div id='projects' ref={ref} {...props} style={{ paddingTop: '5vh' }}>
            <Section num='5' title='Projects'>
                <Paper sx={{ bgcolor: '#8791af', width: { xs: '295px', sm: '500px', md: '800px' }, height: '60vh' }}>
                    <Tabs
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
                        {projects.map((project, index) => (
                            <Tab key={index} label={project.name} {...allyProps(index)} sx={{ fontWeight: 700, color: '#0a192f', fontSize:{ xs: '10px', sm: '12px', md: '16px' } }}/>
                        ))}
                    </Tabs>
                    {projects.map((project, index) => (
                        <TabPanel key={index} value={tabActive} index={index} >
                            <Box>
                                <Typography variant='h3' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Role: </Typography>{project.role}</Typography>
                                <br/>
                                <Typography variant='p' sx={{ color: '#0a192f', fontWeight: 500, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>{project.detail}</Typography>
                                <br/>
                                <br/>
                                <Typography variant='h5' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Tech Stack: </Typography>{project.techstack}</Typography>
                                <br/>
                                <Typography variant='h5' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Deployed Project: </Typography>{project.deployed}</Typography>
                            </Box>
                        </TabPanel>
                    ))}
                </Paper>
            </Section>
        </div>
    )
});

export default Projects;