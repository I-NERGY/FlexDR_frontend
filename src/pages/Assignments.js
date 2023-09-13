import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
import Alert from "@mui/material/Alert";

import Breadcrumb from "../components/layout/Breadcrumb";
import Loading from "../components/layout/Loading";
import {StyledTableRow} from "../components/layout/TableComponents";
import {StyledTableCell} from "../components/layout/TableComponents";
import Button from "@mui/material/Button";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";

const Assignments = () => {
    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,
        <Typography
            key={2}
            color="secondary"
            fontSize={'20px'}
            fontWeight={600}>
            {'Assignments'}
        </Typography>,];

    const [assignments, setAssignments] = useState([])
    const [assignmentsError, setAssignmentsError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/assignments/all')
            .then(response => {
                console.log(response.data)
                setAssignments(response.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setAssignmentsError(true)
                console.log(error)
            })
    }, [])

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>
            <Box sx={{padding: 3, maxWidth: "100vw"}}>
                <Container maxWidth={false} sx={{my: 5, display: 'flex'}}>
                    <Container maxWidth={false}>
                        {loading && <Loading/>}
                        {assignmentsError &&
                            <Alert severity="error">Could not load assignments. Please try again later.</Alert>}
                        {!loading && !assignmentsError && <Table size="small" aria-label="customized table" sx={{border: '1px solid #ccc'}}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Date (dd/mm/yyyy)
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Device ID
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Device Type
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Cluster
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Cluster assigned description
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{void (0)}</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {assignments.length > 0 && assignments.map(assignment => (
                                    <StyledTableRow key={assignment.id}>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography
                                                variant={'body1'}>{new Date(assignment.creation_datetime).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                timeZone: "Europe/Athens"
                                            })}</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography variant={'body1'}>{assignment.meter.device_id}</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography variant={'body1'}>{assignment.meter.type}</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography variant={'body1'}>{assignment.assigned_cluster}</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography
                                                variant={'body1'}>{assignment.assigned_cluster_profile.long_description}</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography variant={'body1'} align={'center'}>
                                                <Button size={'medium'} variant="contained" color={'warning'}
                                                        startIcon={<TroubleshootIcon/>}
                                                    // onClick={() => navigate(`/smart-meters/${meter.id}/inspect`)}
                                                >
                                                    Details
                                                </Button>
                                            </Typography>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>}
                    </Container>
                </Container>
            </Box>
        </>
    );
}

export default Assignments;