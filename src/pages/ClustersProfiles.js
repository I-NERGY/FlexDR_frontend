import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import {Link} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {styled} from '@mui/material/styles';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";

import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Breadcrumb from "../components/layout/Breadcrumb";
import AlertCustom from "../components/layout/AlertCustom";
import ClusterLineChart from "../components/ClustersProfiles/ClusterLineChart";

// const Item = styled(Paper)(({theme}) => ({
//     backgroundColor: theme.palette.primary.main,
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const ClustersProfiles = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    // TODO This will be revisited
    const tempModelId = '64fed83517072e1bdd31f0ed'
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,
        <Typography key="2" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
            {'Clusters Profiles'}
        </Typography>,
    ];

    const [clusterProfiles, setClusterProfiles] = useState([])
    const [clusterChosen, setClusterChosen] = useState('')

    const [deleteSuccess, setDeleteSuccess] = useState(false)
    const [deleteFailure, setDeleteFailure] = useState(false)

    useEffect(() => {
        axios.get(`/cluster-profiles/${tempModelId}`)
            .then(response => {
                setClusterProfiles(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleClusterDelete = id => {
        axios.delete(`cluster-profiles/profile/${id}`)
            .then(response => {
                setClusterChosen('')
                axios.get(`/cluster-profiles/${tempModelId}`)
                    .then(response => {
                        setClusterProfiles(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })

                setDeleteSuccess(true)
            })
            .catch(() => {
                setDeleteFailure(true)
            })
    }

    const handleCloseSnackbar = () => {
        setDeleteSuccess(false)
        setDeleteFailure(false)
    }

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Grid container spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant={'h6'}>Select Cluster Profile</Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    {clusterProfiles.length > 0 && (
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Cluster Profile</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={clusterChosen}
                                                label="Cluster Profile"
                                                onChange={(e) => setClusterChosen(e.target.value)}
                                            >
                                                {clusterProfiles.map((cluster, index) => (
                                                    <MenuItem key={index} value={cluster}>
                                                        {cluster.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                    {clusterProfiles.length < 1 && (
                                        <Alert severity="warning">Oops! Could not load the cluster profiles. Please
                                            check your internet connection and/or try again later!</Alert>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack
                                alignItems="center"
                                direction={'row'}
                                spacing={{xs: 1, sm: 2, md: 4}}
                            >
                                <Button variant="contained" color="success"
                                        onClick={() => navigate('/clusters/add-new')}
                                        sx={{ml: 'auto', width: {xs: '33%', md: '150px'}}}>
                                    <AddIcon/> Add New
                                </Button>
                                {clusterChosen &&
                                    <>
                                        <Button variant="contained" color="warning"
                                                sx={{width: {xs: '33%', md: '150px'}}}
                                                onClick={() => navigate(`/clusters/${clusterChosen.id}/edit`)}>
                                            <EditNoteIcon/> Edit
                                        </Button>
                                        <Button variant="outlined" color="error" sx={{width: {xs: '33%', md: '150px'}}}
                                                onClick={() => handleClusterDelete(clusterChosen.id)}>
                                            <DeleteIcon/> Delete
                                        </Button>
                                    </>}
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {clusterChosen && <Container maxWidth={false} sx={{mt: 3}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Typography variant={'h4'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        {clusterChosen.name}
                    </Typography>
                    <Typography variant={'h6'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        {clusterChosen.short_description}
                    </Typography>
                    <Typography variant={'body1'} mt={3}>
                        {clusterChosen.long_description}
                    </Typography>

                    {clusterChosen.clusters.length > 0 &&
                        <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}} mt={5}>Clusters
                            Included</Typography>}


                    <Grid container rowSpacing={1} spacing={2} mt={1}>
                        {clusterChosen.clusters.length > 0 && clusterChosen.clusters.map((cluster, index) => (
                            <Grid item xs={4} md={3} key={index}>
                                <Accordion sx={{width: '100%'}}>
                                    <AccordionSummary
                                        sx={{backgroundColor: '#97A94D'}}
                                        expandIcon={<ExpandMoreIcon style={{color: 'black'}}/>}
                                        aria-controls="panel1a-content"
                                        id={`panel${index}a-header`}
                                    >
                                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                             alignItems={'center'}>
                                            <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                            <Typography variant={'h6'} align={'center'}
                                                        mt={2}>Cluster {cluster.number}</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ClusterLineChart data={cluster.line_data}/>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        ))}
                    </Grid>

                    {/*<Grid container rowSpacing={1} spacing={2} mt={1}>*/}
                    {/*    {clusterChosen.clusters.length > 0 && clusterChosen.clusters.map((cluster, index) => (*/}
                    {/*        <Grid item xs={3} md={2} key={index}>*/}
                    {/*            <Item>*/}
                    {/*                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}*/}
                    {/*                     alignItems={'center'}>*/}
                    {/*                    <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>*/}
                    {/*                    <Typography variant={'h6'} align={'center'}*/}
                    {/*                                mt={2}>Cluster {cluster.number}</Typography>*/}
                    {/*                </Box>*/}
                    {/*            </Item>*/}
                    {/*        </Grid>*/}
                    {/*    ))*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                </Paper>
            </Container>}

            {clusterChosen && <Container maxWidth={false} sx={{my: 3}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Typography variant="h4" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        Recommendation
                    </Typography>
                    <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}} mt={3}>
                        {clusterChosen.recommendation.name}
                    </Typography>
                    <Typography variant={'h6'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                        {clusterChosen.recommendation.description}
                    </Typography>
                    <Grid container rowSpacing={1} spacing={1} mt={1}>
                        <Grid item xs={2} md={2} sx={{
                            backgroundColor: '#efefef',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box>
                                <TipsAndUpdatesIcon sx={{fontSize: '70px', color: theme.palette.primary.main}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={10} md={10}>
                            <Typography variant="body1">
                                {clusterChosen.recommendation.details}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>}

            {deleteSuccess &&
                <AlertCustom open={deleteSuccess} actionClose={handleCloseSnackbar} severity={'success'}
                             message={'The cluster has been successfully deleted!'}/>}

            {deleteFailure &&
                <AlertCustom open={deleteFailure} actionClose={handleCloseSnackbar} severity={'error'}
                             message={'Oops! Something wrong happened. Please try again!'}/>}
        </>
    );
}

export default ClustersProfiles;