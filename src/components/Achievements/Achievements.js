import React, { forwardRef } from 'react';
import Section from '../Section';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Popover from '@mui/material/Popover';

const achievements =
    [
        { year: '2014', award: '1st Place', color: '#e5cd89', event: 'Computer District Science Olympiad Solok', detail: 'OSN (National Science Olympiad) is a competition in the field of science for students at the elementary, middle and high school levels in Indonesia. Students who take part in the National Science Olympiad are students who have passed selection at the district and provincial levels and are therefore the best students from their respective provinces.' },
        { year: '2014', award: '1st Place', color: '#e5cd89', event: 'Computer Competition NeoTelemetri UNAND Sumatera Barat Region', detail: 'Firetech is an annual activity organized by UKM Neotelemetry Andalas University. Firetech itself was held in 2014. One of the branches of the competition was the ICT Competition.' },
        { year: '2015', award: '2nd Place', color: '#ececec', event: 'Computer District Science Olympiad Solok', detail: 'OSN (National Science Olympiad) is a competition in the field of science for students at the elementary, middle and high school levels in Indonesia. Students who take part in the National Science Olympiad are students who have passed selection at the district and provincial levels and are therefore the best students from their respective provinces.' },
        { year: '2016', award: '3rd Place', color: '#b99364', event: 'Selling Skill Competition Pertamina Lubricant Enduro Sumatera Barat Region', detail: 'PT.Pertamina Lubricants held a "Selling Skill" competition for motorized vehicle lubricants for high school students of the same level, where the assessment was based on marketing strategies, profits, and presentation.' },
        { year: '2018', award: 'Bronze Medalist', color: '#b99364', event: 'MTE (Malaysia Technology Expo)', detail: "Malaysia Technology Expo (MTE) started off as a platform for inventors and innovators to showcase their findings. MTE has grown to become one of the region's most recognized and respected international invention exhibitions, each year connecting more inventors with industry players. In fact, MTE has built a culture of excellence, being known for its prestigious awards and continues to welcome over 500 exhibits annually." }
    ];

const Achievements = forwardRef((props, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activePopover, setActivePopover] = React.useState(null);

    const handlePopoverOpen = (event, popoverId) => {
        setAnchorEl(event.currentTarget);
        setActivePopover(popoverId);
    };

    const handlePopoverClose = () => {
        setActivePopover(null);
    };

    return (
        <div id='achievements' ref={ref} {...props} style={{ paddingTop: '15vh' }}>
            <Section num='2' title='Achievements'>
                <Timeline sx={{ width: { xs: '265px', sm: '400px', md: '580px' } }}>
                    {achievements.map((achievement, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto', fontWeight: 700, fontSize: { xs: '12px', sm: '16px', md: '18px' }, color: '#8791af' }}
                                variant="h4"
                                color="#0a192f"
                            >
                                {achievement.year}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot
                                    sx={{ backgroundColor: '#5ceaca' }}
                                    aria-describedby={index}
                                    aria-haspopup="true"
                                    onMouseEnter={(event) => handlePopoverOpen(event, index)}
                                    onMouseLeave={handlePopoverClose}
                                >
                                    <EmojiEventsIcon sx={{ color: achievement.color }} />
                                </TimelineDot>
                                <Popover
                                    id={index}
                                    sx={{
                                        pointerEvents: 'none'
                                    }}
                                    open={activePopover === index}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography sx={{ p: 1, backgroundColor: '#8791af', width: '35vh' }}>{achievement.detail}</Typography>
                                </Popover>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                color="#0a192f"
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#8791af' }}>
                                    {achievement.award}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: { xs: '8px', md: '14px' }, color: '#8791af' }} >
                                    {achievement.event}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Section>
        </div>
    )
});

export default Achievements;