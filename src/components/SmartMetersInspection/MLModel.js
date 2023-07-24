import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import QueryStatsIcon from "@mui/icons-material/QueryStats";


const MlModel = () => {
    const theme = useTheme()

    return (
        <Paper elevation={3} sx={{p: 3}}>
            <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>ML Model</Typography>

            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} mt={3}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Algorithm
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    k-means
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Clusters
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    12
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Creation date
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    20/01/2023
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Used since
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    20/01/2023
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Used until
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    Today
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
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
                <Grid item xs={12} md={2}>
                    <Typography variant="body1" align="center">
                        <Button size="large" sx={{color: 'white'}} variant="contained" startIcon={<QueryStatsIcon/>}>
                            Details
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MlModel;