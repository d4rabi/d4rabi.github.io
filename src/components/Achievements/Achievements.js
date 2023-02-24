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
import { Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Popover from '@mui/material/Popover';
import { achievements } from '../../data/staticData';

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
        <div id='achievement' ref={ref} {...props} className='section'>
            <Section num='2' title='Achievements'>
                <Paper elevation={0} sx={{ backgroundColor: '#0a192f', maxHeight: '50vh', maxWidth: '80vw', overflow: 'auto'  }}>
                    <Timeline>
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
                </Paper>
            </Section>
        </div>
    )
});

export default Achievements;