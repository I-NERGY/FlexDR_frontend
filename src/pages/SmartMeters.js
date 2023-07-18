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
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Stack from "@mui/material/Stack";

import AddIcon from '@mui/icons-material/Add';

import Breadcrumb from "../components/layout/Breadcrumb";
import Loading from "../components/layout/Loading";

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

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5, display: 'flex'}}>
                <Button onClick={() => navigate('/smart-meters/add')} sx={{ml: 'auto', color: 'white'}}
                        variant="contained" endIcon={<AddIcon/>}>
                    <Typography variant={'body2'} color={'white'}>Add New Smart Meter</Typography>
                </Button>
            </Container>
        </>
    );
}

export default SmartMeters;