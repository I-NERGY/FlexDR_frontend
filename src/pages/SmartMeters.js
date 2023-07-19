import axios from 'axios';
import {styled} from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Stack from "@mui/material/Stack";

import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

import Breadcrumb from "../components/layout/Breadcrumb";
import Loading from "../components/layout/Loading";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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

const SmartMeters = () => {
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>, <Typography
            key={2}
            color="secondary"
            fontSize={'20px'}
            fontWeight={600}>
            {'Smart Meters'}
        </Typography>,];
    const {keycloak, initialized} = useKeycloak();
    const navigate = useNavigate()

    const [smartMeters, setSmartMeters] = useState([])

    // Fetching all the smart meters on the first load
    useEffect(() => {
        axios.get('/meters/all')
            .then(response => {
                console.log(response.data)
                setSmartMeters(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const [editModal, setEditModal] = useState(false)
    const [editSuccess, setEditSuccess] = useState(false)
    const [editFailure, setEditFailure] = useState(false)

    const handleCloseSnackbarEdit = () => {
        setEditSuccess(false)
        setEditFailure(false)
    }

    const [deviceChosenId, setDeviceChosenId] = useState()
    const [deviceUpdatedId, setDeviceUpdatedId] = useState()
    const [deviceUpdatedContractualPower, setDeviceUpdatedContractualPower] = useState()
    const [deviceUpdatedProducedPower, setDeviceUpdatedProducedPower] = useState()
    const [deviceUpdatedType, setDeviceUpdatedType] = useState()

    const handleOpenModal = meter => {
        setEditModal(true)
        setDeviceChosenId(meter.id)
        setDeviceUpdatedId(meter.device_id)
        setDeviceUpdatedContractualPower(meter.contract_pw)
        setDeviceUpdatedProducedPower(meter.prod_pw)
        setDeviceUpdatedType(meter.type)
    };
    const handleCloseModal = () => setEditModal(false);

    const handleFieldChange = (attribute, value) => {
        attribute === 'id' ? setDeviceUpdatedId(value) :
            attribute === 'contractual_power' ? setDeviceUpdatedContractualPower(value) :
                attribute === 'produced_power' ? setDeviceUpdatedProducedPower(value) :
                    setDeviceUpdatedType(value)
    }

    const handleEditDevice = id => {
        const payload = {
            "device_id": deviceUpdatedId,
            "contract_pw": deviceUpdatedContractualPower,
            "prod_pw": deviceUpdatedProducedPower,
            "type": deviceUpdatedType
        }

        axios.put(`/meters/${id}`, payload)
            .then(response => {
                console.log(response.data)
                setEditModal(false)
                setEditSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setEditFailure(true)
            })
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
                    <Typography variant={'h6'}>Editing Device</Typography>
                    <hr/>

                    <Grid container spacing={2} mt={1} mb={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onChange={e => handleFieldChange('id', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Device ID"
                                value={deviceUpdatedId}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onChange={e => handleFieldChange('contractual_power', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Contractual Power"
                                type={'number'}
                                InputProps={{
                                    inputProps: {min: 0},
                                    //     startAdornment: <InputAdornment
                                    //         position="start">(W/m/K)</InputAdornment>
                                }}
                                value={deviceUpdatedContractualPower}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onChange={e => handleFieldChange('produced_power', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Production"
                                type={'number'}
                                InputProps={{
                                    inputProps: {min: 0},
                                    //     startAdornment: <InputAdornment
                                    //         position="start">(W/m/K)</InputAdornment>
                                }}
                                value={deviceUpdatedProducedPower}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onChange={e => handleFieldChange('type', e.target.value)}
                                required
                                fullWidth
                                id="outlined-required"
                                label="Change Type"
                                value={deviceUpdatedType}
                            />
                        </Grid>
                    </Grid>

                    <Stack direction={'row'} sx={{mt: 2}}>
                        <Button variant="contained" color="success" sx={{mx: 1, ml: 'auto'}}
                            onClick={() => handleEditDevice(deviceChosenId)}
                        >
                            SAVE
                        </Button>
                        <Button variant="outlined" color="error" onClick={handleCloseModal}>
                            DISCARD
                        </Button>
                    </Stack>
                </Box>
            </Modal>

            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{my: 5, display: 'flex'}}>
                <Button onClick={() => navigate('/smart-meters/add')} sx={{ml: 'auto', color: 'white'}}
                        variant="contained" endIcon={<AddIcon/>}>
                    <Typography variant={'body2'} color={'white'}>Add New Smart Meter</Typography>
                </Button>
            </Container>

            <Container maxWidth={false} sx={{mt: 5}}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                    Device ID
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                    Contractual Power
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                    Production
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                    Type
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right">{void (0)}</StyledTableCell>
                            <StyledTableCell align="right">{void (0)}</StyledTableCell>
                            <StyledTableCell align="right">{void (0)}</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {smartMeters.length > 0 && smartMeters.map(meter => (
                            <StyledTableRow key={meter.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'}>{meter.device_id}</Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'}>{meter.contract_pw}</Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'}>{meter.prod_pw}</Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'}>{meter.type}</Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'} align={'center'}>
                                        <Button size={'medium'} variant="contained" color={'success'}
                                                startIcon={<TroubleshootIcon/>}>
                                            Inspect
                                        </Button>
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography variant={'body1'} align={'center'}>
                                        <Button size={'medium'} variant="contained" color={'warning'}
                                                startIcon={<EditNoteIcon/>}
                                                onClick={() => handleOpenModal(meter)}
                                        >
                                            Edit
                                        </Button>
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton aria-label="delete" color={'error'}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>

            <Snackbar open={editSuccess} autoHideDuration={3000} onClose={handleCloseSnackbarEdit}>
                <Alert variant="filled" onClose={handleCloseSnackbarEdit} severity="success" sx={{width: '100%'}}>
                    The device has been successfully edited!
                </Alert>
            </Snackbar>

            <Snackbar open={editFailure} autoHideDuration={3000} onClose={handleCloseSnackbarEdit}>
                <Alert variant="filled" onClose={handleCloseSnackbarEdit} severity="error" sx={{width: '100%'}}>
                    Oops! Something wrong happened. Please try again!
                </Alert>
            </Snackbar>
        </>
    );
}

export default SmartMeters;