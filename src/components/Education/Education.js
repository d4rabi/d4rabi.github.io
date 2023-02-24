import React, { forwardRef } from 'react';
import Section from '../Section';
import { Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { educations } from '../../data/staticData';


const Education = forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props}>
            <Section num='1' title='Education'>
                <Paper sx={{ bgcolor: '#8791af', display: 'flex', maxHeight: '50vh', maxWidth: '80vw', overflow: 'auto' }} >
                    <Timeline sx={{ width: { xs: '265px', sm: '400px', md: '580px' }}}>
                        {educations.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto', fontWeight: 700, fontSize:{xs: '10px', sm: '16px', md: '18px'}}}
                                    variant="h4"
                                    color="#0a192f"
                                >
                                    {education.year}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <TimelineDot sx={{ backgroundColor: '#5ceaca' }}>
                                            <SchoolIcon sx={{ color: '#8791af' }} />
                                        </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent 
                                    color="#0a192f"
                                >
                                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize:{xs: '12px', sm: '14px', md: '16px'}, mb: '6px'}}>
                                            {education.name}
                                        </Typography>
                                        <Typography variant="body1" sx={{fontSize:{xs: '8px', md: '14px'}}} >
                                            {education.detail}
                                        </Typography>
                                        <Typography variant="body2" sx={{fontSize:{xs: '8px', md: '14px'}, mt: '6px'}} >
                                            {education.score}
                                        </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Paper>
            </Section>
        </div>
    )
});

export default Education