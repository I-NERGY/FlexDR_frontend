import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import Typography from "@mui/material/Typography";

import Breadcrumb from "../components/layout/Breadcrumb";
import Loading from "../components/layout/Loading";

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
    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>
        </>
    );
}

export default Assignments;