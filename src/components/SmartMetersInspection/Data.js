import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import {LineChart} from "./LineChart";

const Data = () => {
    const theme = useTheme()

    return (
        <Paper elevation={3} sx={{p: 3, mt: 3, height: '100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        Cluster Profile
                    </Typography>
                    <Typography variant="body1" mt={1} mb={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </Typography>

                    <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        Suitable Recommendation
                    </Typography>
                    <Typography variant="body1" mt={1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
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