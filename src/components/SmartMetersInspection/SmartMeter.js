import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const SmartMeter = ({meter}) => {
    const theme = useTheme()

    return (
        <Paper elevation={3} sx={{p: 3, mt: 3}}>
            <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>Smart Meter</Typography>

            <Grid container spacing={2} justifyContent={'flex-start'} alignItems={'center'} mt={4}>
                <Grid item xs={6} md={2}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h6'} align={'center'}>
                            Device ID
                        </Typography>
                        <Typography variant={'body1'} align={'center'}>
                            {meter.device_id}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h6'} align={'center'}>
                            Contractual Power
                        </Typography>
                        <Typography variant={'body1'} align={'center'}>
                            {meter.contract_pw + 'kW'}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h6'} align={'center'}>
                            Production
                        </Typography>
                        <Typography variant={'body1'} align={'center'}>
                            {meter.prod_pw + 'kW'}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h6'} align={'center'}>
                            Type
                        </Typography>
                        <Typography variant={'body1'} align={'center'}>
                            {meter.type}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SmartMeter;