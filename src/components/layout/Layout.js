import {useState, useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";
import {styled, useTheme} from '@mui/material/styles';
import {appbarMenuButtonItems} from "../../appbarMenuButtonItems";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GrainIcon from '@mui/icons-material/Grain';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import AssignmentIcon from '@mui/icons-material/Assignment';

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import FooterContent from "./FooterContent";
import MenuButton from "./MenuButton";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Footer = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Layout({children}) {
    const {keycloak, initialized} = useKeycloak();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navItems = [
        {
            title: 'Homepage',
            icon: <HomeOutlinedIcon sx={{color: theme.palette.primary.main}}/>,
            path: '/'
        },
    ];

    useEffect(() => {
        let roles = keycloak.realmAccess?.roles
        // if (roles && roles?.length > 0) {
        //     navItems.push(
        //         {
        //             title: 'Prediction',
        //             icon: <GrainIcon sx={{color: theme.palette.primary.main}}/>,
        //             path: '/prediction'
        //         }
        //     )
        //     setMenu(navItems)
        // }

        if (roles && roles?.includes('inergy_admin')) {
            navItems.push(
                {
                    title: 'Clusters profiles',
                    icon: <SettingsSuggestIcon sx={{color: theme.palette.primary.main}}/>,
                    path: '/clusters-profiles'
                }
            )
            setMenu(navItems)
        }

        if (roles && roles?.length > 0) {
            navItems.push(
                {
                    title: 'Smart meters',
                    icon: <ElectricMeterIcon sx={{color: theme.palette.primary.main}}/>,
                    path: '/smart-meters'
                }
            )
            setMenu(navItems)
        }

        if (roles && roles?.includes('inergy_admin')) {
            navItems.push(
                {
                    title: 'Assignments',
                    icon: <AssignmentIcon sx={{color: theme.palette.primary.main}}/>,
                    path: '/assignments'
                }
            )
            setMenu(navItems)
        }

    }, [initialized])

    const [menu, setMenu] = useState(navItems)

    const handleSignOut = () => {
        keycloak.logout()
        setMenu(navItems)
    }

    return (
        <>
            <Box sx={{display: 'flex', minHeight: `calc(100vh - 60px)`}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, color: 'white', ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" color={'white'} fontWeight={'bold'}>
                            I-NERGY UC7 Dashboard
                        </Typography>
                        {keycloak.authenticated === true && <>
                            <Typography
                                sx={{ml: 'auto'}}
                                style={{
                                    color: 'white'
                                }}>Welcome, {keycloak?.tokenParsed?.preferred_username}</Typography>
                            <MenuButton subLinks={appbarMenuButtonItems} signout={handleSignOut}/>
                        </>}
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {menu.map((item) => (
                            <ListItem key={item.path} disablePadding
                                      className={location.pathname === item.path ? 'menuItemActive' : ''}
                                      sx={{
                                          borderRadius: '10px', margin: 1, width: '95%'
                                      }}>
                                <ListItemButton onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={
                                        <Typography fontWeight={500} fontSize={17} align={'left'}
                                                    color={location.pathname === item.path ? 'white' : 'normal'}>
                                            {item.title}
                                        </Typography>}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {!keycloak.authenticated && <SignedOutLinks navigate={navigate} location={location}/>}
                        {keycloak.authenticated &&
                            <SignedInLinks navigate={navigate} location={location} handleSignOut={handleSignOut}/>}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader/>
                    {children}
                </Main>
            </Box>
            <Footer open={open} sx={{position: 'sticky', mt: 'auto'}}><FooterContent/></Footer>
        </>
    );
}