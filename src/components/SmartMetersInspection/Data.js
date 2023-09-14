import {useState} from "react";
import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import {LineChart} from "./LineChart";

import EditNoteIcon from "@mui/icons-material/EditNote";

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    minWidth: '350px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

const Data = ({cluster, handleSaveRecommendation, editModal, setEditModal}) => {
    const theme = useTheme()

    const [recommendationUpdatedName, setRecommendationUpdatedName] = useState('')
    const [recommendationUpdatedDescription, setRecommendationUpdatedDescription] = useState('')
    const [recommendationUpdatedDetails, setRecommendationUpdatedDetails] = useState('')

    const handleOpenModal = recommendation => {
        setEditModal(true)
        setRecommendationUpdatedName(recommendation.name)
        setRecommendationUpdatedDescription(recommendation.description)
        setRecommendationUpdatedDetails(recommendation.details)
    };

    const handleCloseModal = () => setEditModal(false);

    const handleFieldChange = (attribute, value) => {
        attribute === 'name' ? setRecommendationUpdatedName(value) :
            attribute === 'description' ? setRecommendationUpdatedDescription(value) :
                setRecommendationUpdatedDetails(value)
    }

    return (
        <>

            <Modal
                open={editModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant={'h5'} color={theme.palette.primary.main}>Editing Recommendation</Typography>
                    <hr/>
                    <Grid container spacing={2} mt={1} mb={3}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => handleFieldChange('name', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Recommendation name"
                                value={recommendationUpdatedName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => handleFieldChange('description', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Recommendation description"
                                value={recommendationUpdatedDescription}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => handleFieldChange('details', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Recommendation details"
                                value={recommendationUpdatedDetails}
                            />
                        </Grid>
                    </Grid>
                    <Stack direction={'row'} sx={{mt: 2}}>
                        <Button variant="outlined" color="error" onClick={handleCloseModal} sx={{mx: 1, ml: 'auto'}}>
                            DISCARD
                        </Button>
                        <Button variant="contained" color="success"
                                disabled={recommendationUpdatedName === '' || recommendationUpdatedDescription === '' || recommendationUpdatedDetails === ''}
                                onClick={() =>
                                    handleSaveRecommendation(recommendationUpdatedName, recommendationUpdatedDescription, recommendationUpdatedDetails)}
                        >
                            SAVE
                        </Button>
                    </Stack>
                </Box>
            </Modal>

            <Paper elevation={3} sx={{p: 3, mt: 3, height: '100%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" mb={3}>
                            Assignment's date: {new Date(cluster.forecast_datetime).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                timeZone: "Europe/Athens"
                                            })}
                        </Typography>
                        <Typography variant="h5" sx={{color: theme.palette.primary.main, fontWeight: 500}}>
                            Cluster profile: {cluster.assigned_cluster_profile.name}
                        </Typography>
                        <Typography variant="body1" mt={2} mb={3}>
                            <span style={{ fontWeight: 500, marginRight:5}}>
                                {cluster.assigned_cluster_profile.short_description}.
                            </span>
                            {cluster.assigned_cluster_profile.long_description}
                        </Typography>
                        <Typography variant="h5">
                            <span style={{
                                color: theme.palette.primary.main,
                                fontWeight: 500
                            }}>Tip: {cluster.assigned_cluster_profile.recommendation.name}</span>
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            {cluster.assigned_cluster_profile.recommendation.description} ({cluster.assigned_cluster_profile.recommendation.details})
                        </Typography>
                        {window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') === 'smart-meters' &&
                            <Button size={'medium'} variant="outlined" color={'warning'} sx={{my: 2}}
                                    startIcon={<EditNoteIcon/>}
                                    onClick={() => handleOpenModal(cluster.assigned_cluster_profile.recommendation)}
                            >
                                Edit Recommendation
                            </Button>}
                    </Grid>
                    <Grid item xs={12} md={4} sx={{minHeight: '300px'}}>
                        <LineChart actualLoad={cluster.assigned_cluster_profile.cluster[0].line_data}
                                   forecastedLoad={cluster.forecasted_load}/>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Data;