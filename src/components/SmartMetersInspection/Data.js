import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import {LineChart} from "./LineChart";

const Data = ({cluster}) => {
    const theme = useTheme()

    return (
        <Paper elevation={3} sx={{p: 3, mt: 3, height: '100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        Cluster Profile
                    </Typography>
                    <Typography variant="body1" mt={1} mb={3}>
                        {cluster.long_description}
                    </Typography>

                    <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        Suitable Recommendation
                    </Typography>
                    <Typography variant="body1" mt={1}>
                        {cluster.recommendation.description || 'Empty.'}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <LineChart/>
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Data;