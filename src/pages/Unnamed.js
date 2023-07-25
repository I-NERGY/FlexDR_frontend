import {Link} from "react-router-dom";
import {styled, useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Breadcrumb from "../components/layout/Breadcrumb";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Unnamed = () => {
    const theme = useTheme()
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,

        <Typography
            key={2}
            color="secondary"
            fontSize={'20px'}
            fontWeight={600}>
            {`Unnamed`}
        </Typography>,];
    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3, mt: 3}}>
                    <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>My Smart Meter</Typography>

                    <Grid container spacing={2} justifyContent={'flex-start'} alignItems={'center'} mt={4}>
                        <Grid item xs={6} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Device ID
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    1234d
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Contractual Power
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    12kW
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Production
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    XXXX
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Type
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    XXXX
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3, mt: 3}}>
                    <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>Suitable Recommendation</Typography>
                    <Grid container rowSpacing={1} spacing={1} mt={1}>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <TipsAndUpdatesIcon sx={{fontSize: '70px'}}/>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={9} md={10}>
                            <Typography variant="body1">
                                {'clusterChosen.recommendation.details'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

export default Unnamed;