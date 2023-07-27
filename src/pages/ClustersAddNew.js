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

import Breadcrumb from "../components/layout/Breadcrumb";

import Diversity2TwoToneIcon from "@mui/icons-material/Diversity2TwoTone";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ClustersAddNew = () => {
    const theme = useTheme()
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,
        <Link className={'breadcrumbLink'} key="2" to="/clusters-profiles">
            {'Clusters Profiles'}
        </Link>,
        <Typography key="3" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
            {'New Cluster'}
        </Typography>,
    ];

    const [models, setModels] = useState([])
    const [modelChosen, setModelChosen] = useState('')

    const [clusterName, setClusterName] = useState('')
    const [clusterDescription, setClusterDescription] = useState('')
    const [clusterDetails, setClusterDetails] = useState('')

    const [recomName, setRecomName] = useState('')
    const [recomDescription, setRecomDescription] = useState('')
    const [recomDetails, setRecomDetails] = useState('')

    useEffect(() => {
        axios.get(`/models/all`)
            .then(response => {
                setModels(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleResetModel = () => {
        setModelChosen('')
    }
    const handleResetCluster = () => {
        setClusterName('')
        setClusterDescription('')
        setClusterDetails('')
    }

    const handleResetRecommendation = () => {
        setRecomName('')
        setRecomDescription('')
        setRecomDetails('')
    }

    const handleCancel = () => {
        setModelChosen('')
        handleResetCluster()
        handleResetRecommendation()
    }

    const handleSave = () => {
        console.log('save')
    }

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>Model</Typography>
                        <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                            <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}} onClick={handleResetModel}>
                                <RestartAltIcon/> RESET
                            </Button>
                        </Box>
                    </Stack>
                    <Grid container spacing={2} justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Select Model</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {models.length > 0 && <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={modelChosen}
                                    label="Select Model"
                                    onChange={(e) => setModelChosen(e.target.value)}
                                >
                                    {models.map(model => (
                                        <MenuItem key={'index'} value={model}>
                                            {model.model_uri}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>}
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
                        <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500, width: '100%'}}>Cluster Profile</Typography>
                        <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                            <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}} onClick={handleResetCluster}>
                                <RestartAltIcon/> RESET
                            </Button>
                        </Box>
                    </Stack>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Name</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter model name" variant="outlined" fullWidth value={clusterName}
                                       onChange={e => setClusterName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Description</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter model description" variant="outlined" fullWidth value={clusterDescription}
                                       onChange={e => setClusterDescription(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Details</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter model details" variant="outlined" fullWidth value={clusterDetails}
                                       onChange={e => setClusterDetails(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} my={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Clusters</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Grid container spacing={2}>
                                {modelChosen && modelChosen.clusters.map(cluster => (
                                    <Grid item xs={3} md={2}>
                                        <Item>
                                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                                 alignItems={'center'}>
                                                <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                                <Typography variant={'h6'} align={'center'} mt={2}>Cluster {cluster.number}</Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                ))}
                                {!modelChosen &&
                                    <Grid item xs={12} md={12}>
                                        {/*<Item>*/}
                                        <Alert severity="warning">Please select a model first!</Alert>
                                        {/*</Item>*/}
                                    </Grid>
                                }
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
                        <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>Recommendation</Typography>
                        <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={5}>
                            <Button variant="contained" color="warning" size={'large'} sx={{ml: 'auto'}} onClick={handleResetRecommendation}>
                                <RestartAltIcon/> RESET
                            </Button>
                        </Box>
                    </Stack>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Name</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter recommendation name" variant="outlined" fullWidth value={recomName}
                                       onChange={e => setRecomName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Description</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter recommendation description" variant="outlined" fullWidth value={recomDescription}
                                       onChange={e => setRecomDescription(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'flex-start'} alignItems={'center'} mt={3}>
                        <Grid item xs={12} md={2}>
                            <Typography variant={'h5'}>Details</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField id="outlined-basic" label="Enter recommendation details" variant="outlined" fullWidth value={recomDetails}
                                       onChange={e => setRecomDetails(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Paper>

                <Box sx={{width: '100%'}} justifyContent={'flex-end'} display={'flex'} mt={3} mb={5}>
                    <Button variant="outlined" color="error" size={'large'} sx={{ml: 'auto', mx: 2}} onClick={handleCancel}>
                        <ClearIcon/> CANCEL
                    </Button>
                    <Button variant="contained" color="success" size={'large'} onClick={handleSave}>
                        <SaveIcon/> SAVE
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default ClustersAddNew;