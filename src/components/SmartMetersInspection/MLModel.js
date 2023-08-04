import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import QueryStatsIcon from "@mui/icons-material/QueryStats";

const MlModel = ({model}) => {
    const theme = useTheme()

    return (
        <Paper elevation={3} sx={{p: 3}}>
            <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>ML Model</Typography>

            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} mt={3}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={2} justifyContent={'flex-start'} alignItems={'center'}>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Algorithm
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    {model.algorithm}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Clusters
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    {model.clusters_number}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Creation date
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    {model.creation_date}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant={'h6'} align={'center'}>
                                    Data used
                                </Typography>
                                <Typography variant={'body1'} align={'center'}>
                                    {model.data_start_date + ' - ' + model.data_end_date}
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