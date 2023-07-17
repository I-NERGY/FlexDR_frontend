import React from 'react';
import {useNavigate} from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";

const HomepageItemFullWidth = ({title, description, link, icon, image, index}) => {
    let navigate = useNavigate();

    return (
        <Grid container sx={{position: 'relative', minHeight: '46vh', maxHeight: '48vh'}}>
            {link && <Avatar className={'linkAvatar'} onClick={() => navigate(link)}>
                <InsertLinkIcon className={'serviceCategoryLinkIcon'}/>
            </Avatar>}

            <Grid item className={(index % 2) ? 'serviceCategoryDescriptionEven' : 'serviceCategoryDescriptionOdd'}
                  xs={12} md={6}
                  order={(index % 2) ? {xs: 2, md: 2} : {xs: 2, md: 1}}
                // sx={{height: {md: '100%', xs: '100%', zIndex: 2}}}
                  display={'flex'} alignItems={'center'}>
                <Container maxWidth={'md'} sx={{p: 5}}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {icon}
                        <Typography variant={'h3'} color={'white'} align={'center'}>{title}</Typography>
                    </Box>
                    <Divider color={'#fff'} sx={{width: '30%', mx: 'auto', height: '1px', mt: 5}}/>
                    <Typography variant={'h4'} color={'white'} align={'center'}
                                sx={{my: 3, px: 1, fontWeight: '100'}}>{description}</Typography>
                    <Divider color={'#fff'} sx={{width: '30%', mx: 'auto', height: '1px', mt: 3}}/>
                </Container>
            </Grid>
            <Grid item xs={12} md={6} sx={{overflow: 'hidden'}}
                  order={(index % 2) ? {xs: 1, md: 1} : {xs: 1, md: 2}}>
                <img style={{height: '100%', width: '100%', objectFit: 'cover', maxHeight: '48vh'}}
                     src={image} className={'homepageServiceImage'}
                     alt=""/>
            </Grid>
        </Grid>
    );
}

export default HomepageItemFullWidth;