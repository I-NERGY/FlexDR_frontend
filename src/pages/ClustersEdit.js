import axios from 'axios'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useTheme} from "@mui/material/styles";


import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import Diversity2TwoToneIcon from "@mui/icons-material/Diversity2TwoTone";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ClustersEdit = () => {
    const theme = useTheme()
    const {id} = useParams()
    const [cluster, setCluster] = useState()
    const [clusterInitial, setClusterInitial] = useState()

    // Get the current cluster info
    useEffect(() => {
        axios.get(`cluster-profiles/profile/${id}`)
            .then(response => {
                setCluster(response.data)
                setClusterInitial(response.data)

                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleClusterSave = id => {

    }

    return (
        <Container maxWidth={false} sx={{mt: 5}}>
            {cluster &&
                <>
                    <Paper elevation={3} sx={{p: 3, mt: 3}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant={'h5'}
                                        sx={{color: theme.palette.primary.main, fontWeight: 500, width: '100%'}}>Cluster
                                Profile</Typography>
                            <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                                {/*<Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}}*/}
                                {/*        onClick={handleResetCluster}>*/}
                                {/*    <RestartAltIcon/> RESET*/}
                                {/*</Button>*/}
                            </Box>
                        </Stack>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Name</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter model name" variant="outlined" fullWidth
                                           value={cluster.name}
                                           onChange={e => setCluster({...cluster, name: e.target.value})}/>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Description</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter model description" variant="outlined"
                                           fullWidth
                                           value={cluster.short_description}
                                           onChange={e => setCluster({...cluster, short_description: e.target.value})}/>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Details</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter model details" variant="outlined" fullWidth
                                           value={cluster.long_description}
                                           onChange={e => setCluster({...cluster, long_description: e.target.value})}/>
                            </Grid>
                        </Grid>
                    </Paper>


                    <Paper elevation={3} sx={{p: 3, mt: 3}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant={'h5'} sx={{
                                color: theme.palette.primary.main, fontWeight: 500
                            }}>Recommendation</Typography>
                            <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                                {/*<Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}}*/}
                                {/*        onClick={handleResetRecommendation}>*/}
                                {/*    <RestartAltIcon/> RESET*/}
                                {/*</Button>*/}
                            </Box>
                        </Stack>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Name</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter recommendation name" variant="outlined"
                                           fullWidth value={cluster.recommendation.name}
                                           onChange={e => setCluster({
                                               ...cluster,
                                               recommendation: {...cluster.recommendation, name: e.target.value}
                                           })}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Description</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter recommendation description"
                                           variant="outlined"
                                           fullWidth value={cluster.recommendation.description}
                                           onChange={e => setCluster({
                                               ...cluster,
                                               recommendation: {...cluster.recommendation, description: e.target.value}
                                           })}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                            <Grid item xs={12} md={2}>
                                <Typography variant={'h5'}>Details</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextField id="outlined-basic" label="Enter recommendation details" variant="outlined"
                                           fullWidth value={cluster.recommendation.details}
                                           onChange={e => setCluster({
                                               ...cluster,
                                               recommendation: {...cluster.recommendation, details: e.target.value}
                                           })}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </>}

            {/*<Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={3} mb={5}>*/}
            {/*    <Button variant="outlined" color="error" size={'large'} sx={{ml: 'auto', mx: 2}}*/}
            {/*            onClick={handleCancel}>*/}
            {/*        <ClearIcon/> CANCEL*/}
            {/*    </Button>*/}
            {/*    <Button variant="contained" color="success" size={'large'} onClick={handleSave}*/}
            {/*            disabled={modelChosen === '' || clusterName === '' || clusterDescription === '' || clusterDetails === '' || recomName === '' || recomDescription === '' || recomDetails === ''}>*/}
            {/*        <SaveIcon/> SAVE*/}
            {/*    </Button>*/}
            {/*</Box>*/}
            <Button onClick={() => console.log(cluster)}>TEEEEEEEEEEEEEST</Button>
        </Container>
    );
}

export default ClustersEdit;