import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const SignedInLinks = ({navigate, location, handleSignOut, roles}) => {
    return (
        <>
            {(roles.includes('inergy_admin') || roles.includes('Consumer')) && <ListItem disablePadding
                       className={location.pathname === '/daily-tip' ? 'menuItemActive' : ''}
                       sx={{
                           borderRadius: '10px !important', margin: 1, width: '95%'
                       }}>
                <ListItemButton onClick={() => navigate('/daily-tip')}>
                    <ListItemIcon>{<TipsAndUpdatesIcon color="secondary"/>}</ListItemIcon>
                    <ListItemText primary={
                        <Typography fontWeight={500} fontSize={17} align={'left'}
                                    color={location.pathname === '/daily-tip' ? 'white' : 'normal'}>
                            {'Daily Tip'}
                        </Typography>}/>
                </ListItemButton>
            </ListItem>}

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