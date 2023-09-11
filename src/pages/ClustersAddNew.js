import {useEffect, useState} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import {styled, useTheme} from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Diversity2TwoToneIcon from "@mui/icons-material/Diversity2TwoTone";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Breadcrumb from "../components/layout/Breadcrumb";
import AlertCustom from "../components/layout/AlertCustom";

const Item = styled(Paper)(({theme}) => ({
    // backgroundColor: theme.palette.primary.main, ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ClustersAddNew = () => {
    const theme = useTheme()
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>, <Link className={'breadcrumbLink'} key="2" to="/clusters-profiles">
            {'Clusters Profiles'}
        </Link>, <Typography key="3" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
            {'New Cluster'}
        </Typography>,];

    const [models, setModels] = useState([])
    const [modelChosen, setModelChosen] = useState('')

    const [clusterName, setClusterName] = useState('')
    const [clusterDescription, setClusterDescription] = useState('')
    const [clusterDetails, setClusterDetails] = useState('')

    const [clustersAvailable, setClustersAvailable] = useState([])
    const [clustersChosen, setClustersChosen] = useState([])

    const [recomName, setRecomName] = useState('')
    const [recomDescription, setRecomDescription] = useState('')
    const [recomDetails, setRecomDetails] = useState('')

    const [clusterAddSuccess, setClusterAddSuccess] = useState(false)
    const [clusterAddFailure, setClusterAddFailure] = useState(false)

    useEffect(() => {
        axios.get(`/models/all`)
            .then(response => {
                setModels(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleSelectModel = (modelName) => {
        setModelChosen(modelName)
    }

    useEffect(() => {
        setClustersAvailable(modelChosen.clusters)
    }, [modelChosen])

    const handleResetModel = () => {
        setModelChosen('')
        setClustersChosen([])
    }
    const handleResetCluster = () => {
        setClusterName('')
        setClusterDescription('')
        setClusterDetails('')
        setClustersChosen([])
    }
    const handleResetRecommendation = () => {
        setRecomName('')
        setRecomDescription('')
        setRecomDetails('')
    }

    const handleSelectCluster = clusterNumber => {
        const index = clustersChosen.indexOf(clusterNumber);

        if (index !== -1) {
            // Number exists, so remove it
            const updatedClusters = [...clustersChosen];
            updatedClusters.splice(index, 1);
            setClustersChosen(updatedClusters);
        } else {
            // Number does not exist, so add it
            setClustersChosen([...clustersChosen, clusterNumber]);
        }
    }

    const handleCancel = () => {
        setModelChosen('')
        handleResetCluster()
        handleResetRecommendation()
    }

    const handleCloseSnackbarAdd = () => {
        setClusterAddSuccess(false)
        setClusterAddFailure(false)
    }

    const handleSave = () => {
        const payload = {
            "ml_model_id": modelChosen.id,
            "selected_clusters": clustersChosen,
            "name": clusterName,
            "short_description": clusterDescription,
            "long_description": clusterDetails,
            "recommendation": {
                "name": recomName, "description": recomDescription, "details": recomDetails
            }
        }

        axios.post('/cluster-profiles/new', payload)
            .then(response => {
                setClusterAddSuccess(true)
            })
            .catch(() => {
                setClusterAddFailure(true)
            })
    }

    return (<>
        <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

        <Container maxWidth={false} sx={{mt: 5}}>
            <Paper elevation={3} sx={{p: 3}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant={'h5'}
                                sx={{color: theme.palette.primary.main, fontWeight: 500}}>Model</Typography>
                    <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                        <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}}
                                onClick={handleResetModel}>
                            <RestartAltIcon/> RESET
                        </Button>
                    </Box>
                </Stack>
                <Grid container spacing={2} justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Select Model</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            {models.length > 0 && <>
                                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={modelChosen}
                                    label="Select Model"
                                    onChange={(e) => handleSelectModel(e.target.value)}
                                >
                                    {models.map(model => (<MenuItem key={model.id} value={model}>
                                        {model.model_uri}
                                    </MenuItem>))}
                                </Select>
                            </>}
                            {models.length < 1 && (
                                <Alert severity="warning">Oops! Could not load the models. Please check your internet
                                    connection and/or try again later!</Alert>
                            )}
                        </FormControl>
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
                        <TextField id="outlined-basic" label="Enter model name" variant="outlined" fullWidth
                                   value={clusterName}
                                   onChange={e => setClusterName(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Description</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="outlined-basic" label="Enter model description" variant="outlined" fullWidth
                                   value={clusterDescription}
                                   onChange={e => setClusterDescription(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Details</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="outlined-basic" label="Enter model details" variant="outlined" fullWidth
                                   value={clusterDetails}
                                   onChange={e => setClusterDetails(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-start'} alignItems={'center'} my={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Clusters <span
                            style={{fontSize: '16px'}}>(Click to choose)</span></Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Grid container spacing={2}>
                            {clustersAvailable && clustersAvailable.length > 0 && clustersAvailable.map((cluster, index) => (
                                <Grid item xs={3} md={2} key={index}>
                                    <Item onClick={() => handleSelectCluster(cluster.number)}
                                          sx={{backgroundColor: clustersChosen.indexOf(cluster.number) !== -1 ? theme.palette.primary.main : 'white'}}
                                    >
                                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                             alignItems={'center'}>
                                            <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                            <Typography variant={'h6'} align={'center'}
                                                        mt={2}>Cluster {cluster.number}</Typography>
                                            {clustersChosen.indexOf(cluster.number) !== -1 &&
                                                <CheckCircleIcon color={'success'} sx={{ml: 'auto'}}/>}
                                        </Box>
                                    </Item>
                                </Grid>))}
                            {!modelChosen && <Grid item xs={12} md={12}>
                                <Alert severity="warning">Please select a model first!</Alert>
                            </Grid>}
                        </Grid>
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
                                   fullWidth value={recomName}
                                   onChange={e => setRecomName(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Description</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="outlined-basic" label="Enter recommendation description" variant="outlined"
                                   fullWidth value={recomDescription}
                                   onChange={e => setRecomDescription(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                    <Grid item xs={12} md={2}>
                        <Typography variant={'h5'}>Details</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="outlined-basic" label="Enter recommendation details" variant="outlined"
                                   fullWidth value={recomDetails}
                                   onChange={e => setRecomDetails(e.target.value)}/>
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={3} mb={5}>
                <Button variant="outlined" color="error" size={'large'} sx={{ml: 'auto', mx: 2}}
                        onClick={handleCancel}>
                    <ClearIcon/> CANCEL
                </Button>
                <Button variant="contained" color="success" size={'large'} onClick={handleSave}
                        disabled={modelChosen === '' || clusterName === '' || clusterDescription === '' || clusterDetails === '' || recomName === '' || recomDescription === '' || recomDetails === ''}>
                    <SaveIcon/> SAVE
                </Button>
            </Box>
        </Container>

        {clusterAddSuccess &&
            <AlertCustom open={clusterAddSuccess} actionClose={handleCloseSnackbarAdd} severity={'success'}
                         message={'The cluster has been successfully added!'}/>}

        {clusterAddFailure &&
            <AlertCustom open={clusterAddFailure} actionClose={handleCloseSnackbarAdd} severity={'error'}
                         message={'Oops! Something wrong happened. Please try again!'}/>}
    </>);
}

export default ClustersAddNew;