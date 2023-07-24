import {Link, useParams} from 'react-router-dom'

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

import QueryStatsIcon from '@mui/icons-material/QueryStats';

import Breadcrumb from "../components/layout/Breadcrumb";

const SmartMetersInspection = () => {
    const {id} = useParams()

    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,
        <Link className={'breadcrumbLink'} key="1" to="/smart-meters">
            {'Smart Meters'}
        </Link>,
        <Typography
            key={2}
            color="secondary"
            fontSize={'20px'}
            fontWeight={600}>
            {`Smart Meter #${id}`}
        </Typography>,];

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Algorithm
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            k-means
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Clusters
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            12
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Creation date
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            20/01/2023
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Used since
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            20/01/2023
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Used until
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            Today
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Box display={'flex'} flexDirection={'column'}>
                                        <Typography variant={'h6'} align={'center'}>
                                            Data used
                                        </Typography>
                                        <Typography variant={'body1'} align={'center'}>
                                            20/01/2023 - 20/06/2023
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="body1" align="center">
                                <Button size="large" sx={{color: 'white'}} variant="contained" startIcon={<QueryStatsIcon/>}>
                                    Details
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>)
        ;
}

export default SmartMetersInspection;