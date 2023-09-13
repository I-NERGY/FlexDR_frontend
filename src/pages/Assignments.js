import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";

import Breadcrumb from "../components/layout/Breadcrumb";
import Loading from "../components/layout/Loading";
import {StyledTableRow} from "../components/layout/TableComponents";
import {StyledTableCell} from "../components/layout/TableComponents";

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
    const [loading, setLoading] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>
            <Box sx={{padding: 3, maxWidth: "100vw"}}>
                <Container maxWidth={false} sx={{my: 5, display: 'flex'}}>
                    <Container maxWidth={false}>
                        <Table size="small" aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        <Typography fontWeight={'bold'} variant={'subtitle1'}>
                                            Date
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
                        </Table>
                    </Container>
                </Container>
            </Box>
        </>
    );
}

export default Assignments;