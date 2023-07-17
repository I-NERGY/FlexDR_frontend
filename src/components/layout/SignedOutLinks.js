import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Typography from "@mui/material/Typography";

const SignedOutLinks = ({navigate, location}) => {
    return (
        <>
            <ListItem disablePadding
                      className={location.pathname === '/signin' ? 'menuItemActive' : ''}
                      sx={{
                          borderRadius: '10px !important', margin: 1, width: '95%'
                      }}>
                <ListItemButton
                    onClick={() => navigate('/signin')} key={'SignIn'}
                >
                    <ListItemIcon>{<LoginOutlinedIcon color="secondary"/>}</ListItemIcon>
                    <ListItemText primary={
                        <Typography fontWeight={500} fontSize={17} align={'left'}
                                    color={location.pathname === '/signin' ? 'white' : 'normal'}>
                            {'Sign In'}
                        </Typography>}/>
                </ListItemButton>
            </ListItem>
        </>
    );
}

export default SignedOutLinks;