import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './../../images/logo.svg';

const pages = 
    [
        {num: '[0]', name: 'About', link: '/about'}, 
        {num: '[1]', name: 'Education', link: '/education'}, 
        {num: '[2]', name: 'Achievement', link: '/achievement'}, 
        {num: '[3]', name: 'Activity', link: '/activity'}, 
        {num: '[4]', name: 'Work', link: '/work'}, 
        {num: '[5]', name: 'Project', link: '/project'}, 
        {num: '[6]', name: 'Contact', link: '/contact'}
    ];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#0a192f' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <a href='/'  rel="noopener noreferrer">
                        <img src={logo} alt="logo" style={{ height: '35px', width: 'auto' }}/>
                    </a>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end'}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            style={{ color:'#5ceaca' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                            MenuListProps={{
                                sx: {
                                    backgroundColor: '#0a192f'
                                }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.num} onClick={handleCloseNavMenu}>
                                    <Button
                                        sx={{ 
                                            color:'#5ceaca',
                                            '&.active': {
                                                color: '#0a192f',
                                                bgcolor: '#5ceaca',
                                            }
                                        }}
                                        component={NavLink}
                                        to={page.link}
                                    >
                                        <Typography color='#8791af' textTransform='none' fontSize='10px'>{page.num}</Typography>
                                        <Typography color='inherit' textTransform='none' fontSize='16px'>{page.name}</Typography>
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.num}
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                        my: 2, 
                                        color: '#5ceaca', 
                                        display: 'flex',
                                        '&.active': {
                                            color: '#0a192f',
                                            bgcolor: '#5ceaca',
                                        }
                                    }}
                                component={NavLink}
                                to={page.link}
                                exact='true'
                            >
                                <Typography color='#8791af' textTransform='none' fontSize='10px'>{page.num}</Typography>
                                <Typography color='inherit' textTransform='none' fontSize='16px'>{page.name}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;