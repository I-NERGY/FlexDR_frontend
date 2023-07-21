import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';


import Breadcrumb from "../components/layout/Breadcrumb";

const ClustersProfiles = () => {
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
                <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
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
                            <Button variant="contained" color="success" sx={{width: '33%'}}>
                                <AddIcon/> Add New
                            </Button>
                            <Button variant="contained" color="warning" sx={{width: '33%'}}>
                                <EditNoteIcon/> Edit
                            </Button>
                            <Button variant="outlined" color="error" sx={{width: '33%'}}>
                                <DeleteIcon/> Delete
                            </Button>
                        </Stack>
                    </Grid>

                </Grid>


            </Container>
        </>
    );
}

export default ClustersProfiles;