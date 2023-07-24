import React, {useState, useEffect} from "react";
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

import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import Breadcrumb from "../components/layout/Breadcrumb";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ClustersProfiles = () => {
    const theme = useTheme()
    // TODO This will be revisited
    const tempModelId = '64ba44a12fed08129dbe033e'
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
    useEffect(() => {
        axios.get(`/cluster-profiles/${tempModelId}`)
            .then(response => {
                console.log(response.data)
                setClusterProfiles(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
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
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} spacing={2}>
                        <Stack
                            alignItems="center"
                            direction={'row'}
                            spacing={{xs: 1, sm: 2, md: 4}}
                        >
                            <Button variant="contained" color="success"
                                    sx={{ml: 'auto', width: {xs: '33%', md: '150px'}}}>
                                <AddIcon/> Add New
                            </Button>
                            <Button variant="contained" color="warning" sx={{width: {xs: '33%', md: '150px'}}}>
                                <EditNoteIcon/> Edit
                            </Button>
                            <Button variant="outlined" color="error" sx={{width: {xs: '33%', md: '150px'}}}>
                                <DeleteIcon/> Delete
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{p: 3}}>
                    <Typography variant={'h4'} sx={{color: theme.palette.primary.main, fontWeight: 500}}>Cluster
                        1</Typography>
                    <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}} mt={3}>Short
                        Description</Typography>
                    <Typography variant={'body1'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </Typography>

                    <Typography variant={'h5'} sx={{color: theme.palette.primary.main, fontWeight: 500}} mt={5}>Clusters
                        Included</Typography>

                    <Grid container rowSpacing={1} spacing={2} mt={1}>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                    <Typography variant={'h6'} align={'center'} mt={2}>Cluster 10</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                    <Typography variant={'h6'} align={'center'} mt={2}>Cluster 13</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <Diversity2TwoToneIcon sx={{fontSize: '70px'}}/>
                                    <Typography variant={'h6'} align={'center'} mt={2}>Cluster 14</Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                        Recommendation
                    </Typography>
                    <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 500 }} mt={3}>
                        Short Description
                    </Typography>
                    <Grid container rowSpacing={1} spacing={1} mt={1}>
                        <Grid item xs={2} md={2} sx={{ backgroundColor: '#efefef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box>
                                <TipsAndUpdatesIcon sx={{ fontSize: '70px', color: theme.palette.primary.main }} />
                            </Box>
                        </Grid>
                        <Grid item xs={10} md={10}>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

export default ClustersProfiles;