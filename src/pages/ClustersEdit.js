import axios from 'axios'
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useTheme} from "@mui/material/styles";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import Breadcrumb from "../components/layout/Breadcrumb";
import AlertCustom from "../components/layout/AlertCustom";

const ClustersEdit = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const {id} = useParams()
    const [cluster, setCluster] = useState()
    const [clusterInitial, setClusterInitial] = useState()

    const [clusterEditSuccess, setClusterEditSuccess] = useState(false)
    const [clusterEditFailure, setClusterEditFailure] = useState(false)

    const handleCloseSnackbarAdd = () => {
        setClusterEditSuccess(false)
        setClusterEditFailure(false)
    }

    const breadcrumbs = [<Link className={'breadcrumbLink'} key="1" to="/">
        {'Homepage'}
    </Link>, <Link className={'breadcrumbLink'} key="2" to="/clusters-profiles">
        {'Clusters Profiles'}
    </Link>, <Typography key="3" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
        {`Edit Cluster #${id}`}
    </Typography>,];

    // Get the current cluster info
    useEffect(() => {
        axios.get(`cluster-profiles/profile/${id}`)
            .then(response => {
                setCluster(response.data)
                setClusterInitial(response.data)
            })
            .catch(error => console.log(error))
    }, [id])

    const handleClusterSave = id => {
        axios.put(`cluster-profiles/profile/${id}`, cluster)
            .then(response => {
                setCluster(response.data)
                setClusterEditSuccess(true)
            })
            .catch(() => setClusterEditFailure(true))
    }

    const handleCancel = () => {
        setCluster(clusterInitial)
        navigate(-1)
    }

    const handleResetCluster = () => {
        setCluster({
            ...cluster,
            name: clusterInitial.name,
            short_description: clusterInitial.short_description,
            long_description: clusterInitial.long_description
        })
    }

    const handleResetRecommendation = () => {
        setCluster({
            ...cluster,
            recommendation: {
                ...cluster.recommendation,
                name: clusterInitial.recommendation.name,
                description: clusterInitial.recommendation.description,
                details: clusterInitial.recommendation.details
            }
        })
    }

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            {cluster &&
                <>
                    <Container maxWidth={false} sx={{mt: 5}}>
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
                                    <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}}
                                            onClick={handleResetCluster}>
                                        <RestartAltIcon/> RESET
                                    </Button>
                                </Box>
                            </Stack>
                            <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                                <Grid item xs={12} md={2}>
                                    <Typography variant={'h5'}>Name</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <TextField id="outlined-basic" label="Enter cluster profile name" variant="outlined" fullWidth
                                               value={cluster.name}
                                               onChange={e => setCluster({...cluster, name: e.target.value})}/>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                                <Grid item xs={12} md={2}>
                                    <Typography variant={'h5'}>Description</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <TextField id="outlined-basic" label="Enter cluster profile description" variant="outlined"
                                               fullWidth
                                               value={cluster.short_description}
                                               onChange={e => setCluster({
                                                   ...cluster,
                                                   short_description: e.target.value
                                               })}/>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                                <Grid item xs={12} md={2}>
                                    <Typography variant={'h5'}>Details</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <TextField id="outlined-basic" label="Enter cluster profile details" variant="outlined" multiline rows={3}
                                               fullWidth
                                               value={cluster.long_description}
                                               onChange={e => setCluster({
                                                   ...cluster,
                                                   long_description: e.target.value
                                               })}/>
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
                                    <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}}
                                            onClick={handleResetRecommendation}>
                                        <RestartAltIcon/> RESET
                                    </Button>
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
                                                   recommendation: {
                                                       ...cluster.recommendation,
                                                       description: e.target.value
                                                   }
                                               })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                                <Grid item xs={12} md={2}>
                                    <Typography variant={'h5'}>Details</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <TextField id="outlined-basic" label="Enter recommendation details" multiline rows={3}
                                               variant="outlined"
                                               fullWidth value={cluster.recommendation.details}
                                               onChange={e => setCluster({
                                                   ...cluster,
                                                   recommendation: {...cluster.recommendation, details: e.target.value}
                                               })}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>

                        <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={3} mb={5}>
                            <Button variant="outlined" color="error" size={'large'} sx={{ml: 'auto', mx: 2}}
                                    onClick={handleCancel}
                            >
                                <ClearIcon/> CANCEL
                            </Button>
                            <Button variant="contained" color="success" size={'large'}
                                    onClick={() => handleClusterSave(id)}
                                // disabled={modelChosen === '' || clusterName === '' || clusterDescription === '' || clusterDetails === '' || recomName === '' || recomDescription === '' || recomDetails === ''}
                            >
                                <SaveIcon/> SAVE
                            </Button>
                        </Box>
                    </Container>

                    {clusterEditSuccess &&
                        <AlertCustom open={clusterEditSuccess} actionClose={handleCloseSnackbarAdd} severity={'success'}
                                     message={'The cluster has been successfully updated!'}/>}

                    {clusterEditFailure &&
                        <AlertCustom open={clusterEditFailure} actionClose={handleCloseSnackbarAdd} severity={'error'}
                                     message={'Oops! Something wrong happened. Please try again!'}/>}
                </>}
        </>
    );
}

export default ClustersEdit;