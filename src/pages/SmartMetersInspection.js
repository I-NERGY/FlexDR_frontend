import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from "axios";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Breadcrumb from "../components/layout/Breadcrumb";
import MLModel from "../components/SmartMetersInspection/MLModel";
import SmartMeter from "../components/SmartMetersInspection/SmartMeter";
import Data from "../components/SmartMetersInspection/Data";

const SmartMetersInspection = () => {
    const {id} = useParams()

    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">
            {'Homepage'}
        </Link>,
        <Link className={'breadcrumbLink'} key="1" to="/smart-meters">
            {'Smart Meters'}
        </Link>,
        <Typography
            key={2}
            color="secondary"
            fontSize={'20px'}
            fontWeight={600}>
            {`Smart Meter #${id}`}
        </Typography>,];
    const [details, setDetails] = useState('')

    // TODO ml_model_id to be deleted in next steps
    useEffect(() => {
        axios.get(`/assignments/${id}/64fed83517072e1bdd31f0ed`)
            .then(response => {
                setDetails(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{my: 5}}>
                {details &&
                    <>
                        <MLModel model={details.ml_model}/>
                        <SmartMeter meter={details.meter}/>
                        <Data cluster={details}/>
                    </>}
            </Container>
        </>
    );
}

export default SmartMetersInspection;