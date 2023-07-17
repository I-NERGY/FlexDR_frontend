import React, {useContext} from 'react';
import {
    NavigateFunction,
    Location
} from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Typography from "@mui/material/Typography";

const SignedInLinks = ({navigate, location, handleSignOut}) => {
    return (
        <>
            <ListItem disablePadding
                      className={location.pathname === '/user/profile' ? 'menuItemActive' : ''}
                      sx={{
                          borderRadius: '10px !important', margin: 1, width: '95%'
                      }}>
                <ListItemButton onClick={() => navigate('/user/profile')}>
                    <ListItemIcon>{<AccountCircleIcon color="secondary"/>}</ListItemIcon>
                    <ListItemText primary={
                        <Typography fontWeight={500} fontSize={17} align={'left'}
                                    color={location.pathname === '/user/profile' ? 'white' : 'normal'}>
                            {'My Profile'}
                        </Typography>}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding
                      sx={{
                          borderRadius: '10px !important', margin: 1, width: '95%'
                      }}>
                <ListItemButton onClick={handleSignOut}>
                    <ListItemIcon>{<LogoutOutlinedIcon color="secondary"/>}</ListItemIcon>
                    <ListItemText primary={
                        <Typography fontWeight={500} fontSize={17} align={'left'}>
                            {'Sign Out'}
                        </Typography>}/>
                </ListItemButton>
            </ListItem>
        </>
    );
}

export default SignedInLinks;