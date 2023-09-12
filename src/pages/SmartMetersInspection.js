import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from "axios";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Breadcrumb from "../components/layout/Breadcrumb";
import MLModel from "../components/SmartMetersInspection/MLModel";
import SmartMeter from "../components/SmartMetersInspection/SmartMeter";
import Data from "../components/SmartMetersInspection/Data";
import AlertCustom from "../components/layout/AlertCustom";

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
    const [smartMeterDetails, setSmartMeterDetails] = useState('')


    // Variables for modal and for edit message snackbars
    const [editModal, setEditModal] = useState(false)
    const [editSuccess, setEditSuccess] = useState(false)
    const [editFailure, setEditFailure] = useState(false)

    // TODO ml_model_id to be deleted in next steps
    useEffect(() => {
        axios.get(`/assignments/${id}/64fed83517072e1bdd31f0ed`)
            .then(response => {
                setSmartMeterDetails(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleSaveRecommendation = (name, description, details) => {
        const payload = {
            recommendation: {
                name, description, details
            }
        }

        axios.put(`/assignments/edit/${smartMeterDetails.id}`, payload)
            .then(response => {
                setEditSuccess(true)
                setSmartMeterDetails(response.data)
                setEditModal(false)
            })
            .catch(() => {
                setEditFailure(true)
                setEditModal(false)
            })
    }

    const handleCloseSnackbarEdit = () => {
        setEditSuccess(false)
        setEditFailure(false)
    }

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{my: 5}}>
                {smartMeterDetails &&
                    <>
                        <MLModel model={smartMeterDetails.ml_model}/>
                        <SmartMeter meter={smartMeterDetails.meter}/>
                        <Data cluster={smartMeterDetails} handleSaveRecommendation={handleSaveRecommendation}
                              editModal={editModal}
                              setEditModal={setEditModal}/>
                    </>}
            </Container>

            {editSuccess &&
                <AlertCustom open={editSuccess} actionClose={handleCloseSnackbarEdit} severity={'success'}
                             message={'The recommendation has been successfully edited!'}/>}

            {editFailure &&
                <AlertCustom open={editFailure} actionClose={handleCloseSnackbarEdit} severity={'error'}
                             message={'Oops! Something wrong happened. Please try again!'}/>}

        </>
    );
}

export default SmartMetersInspection;