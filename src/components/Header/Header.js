import React, { useState, forwardRef } from 'react';
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './../../images/logo.svg';
import { prePath, pages } from "./../../data/staticData";

const Header = forwardRef((props, ref) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#0a192f' }} ref={ref}>
            <Container maxWidth="xl">
                <Toolbar>
                    <NavLink to={prePath}>
                        <img src={logo} alt="logo" style={{ height: '35px', width: 'auto' }}/>
                    </NavLink>
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
                                            m: 2,
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
                                        m: 2, 
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
});
export default Header;