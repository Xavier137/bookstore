import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const PAGES = [
    { label: 'HOME', path: '/' }, // Add paths for each page
    { label: 'PRODUCTS', path: '/products' },
    { label: 'ABOUT US', path: '/aboutus' },
    { label: 'CONTACT US', path: '/contactus' },
    { label: 'LOGIN', path:'/login'},
    { label: 'CART', path:'/cart'}
];

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment >
            <AppBar>
                <Toolbar sx={{ background: "#063970" }}>
                    <LibraryBooksIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
                                    eBoks-EAc
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                                <>
                                    <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit' value={value} onChange={(e, value) => setValue(value)}
                                        indicatorcolor='secondary'>
                                        {
                                            PAGES.map((page, index) => (
                                                <Tab key={index} component={Link} to={page.path} label={page.label} /> // Use Link component and specify path
                                            ))
                                        }
                                    </Tabs>
                                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{height: '10px'}}/> */}
                                    <div style={{display: {xs: 'b'}}}>
                                    <input type='text' placeholder='Search...' style={{height: '30px', borderRadius: '8px', border: 'none'}}/>
                                    <Button style={{backgroundColor: 'white', height: '30px'}}><SearchOutlinedIcon/></Button>
                                    </div>
                                    <Button sx={{ margin: 'auto' }} variant='container'>Reach{''}
                                    </Button>
                                    <Button sx={{ marginLeft: '10px' }} variant='container'>Cart{''}
                                    </Button>
                                </>
                            )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
