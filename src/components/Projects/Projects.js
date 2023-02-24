import { forwardRef, useState } from 'react';
import Section from '../Section';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { projects } from '../../data/staticData';
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref) => {
    const [tabActive, setTabActive] = useState('0');
    
    const handleTabChange = (event, newValue) => {
        setTabActive(newValue);
    };

    return (
        <div ref={ref} {...props}>
            <Section num='5' title='Projects'>
                <Paper sx={{ bgcolor: '#8791af', height: '50vh', maxWidth: '80vw', overflow: 'hidden' }}>
                    <TabContext  value={tabActive}>
                        <TabList
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
                            {projects.map((project, index) => (
                                <Tab key={index} label={project.name} value={index.toString()} sx={{ fontWeight: 700, color: '#0a192f', fontSize:{ xs: '10px', sm: '12px', md: '16px' } }}/>
                            ))}
                        </TabList>
                            {projects.map((project, index) => (
                                <TabPanel key={index} value={index.toString()} sx={{ my: '1%', p:'5%', height: '85%', overflow: 'auto' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: '-100vw' }}
                                        animate={{ opacity: 1 , x: '0vw', transition: {
                                                type: "spring",
                                                bounce: 0.4,
                                                duration: 0.8
                                            }
                                        }}
                                    >
                                        <Typography variant='h3' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Role: </Typography>{project.role}</Typography>
                                        <br/>
                                        <Typography variant='p' sx={{ color: '#0a192f', fontWeight: 500, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>{project.detail}</Typography>
                                        <br/>
                                        <br/>
                                        <Typography variant='h5' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Tech Stack: </Typography>{project.techstack}</Typography>
                                        <br/>
                                        <Typography variant='h5' sx={{ color: '#0a192f', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }} ><Typography component='span' sx={{ color: '#5ceaca', fontWeight: 700, fontSize:{ xs: '10px', sm: '12px', md: '18px' } }}>Deployed Project: </Typography>{project.deployed}</Typography>
                                    </motion.div>
                                </TabPanel>
                            ))}
                    </TabContext>
                </Paper>
            </Section>
        </div>
    )
});

export default Projects;