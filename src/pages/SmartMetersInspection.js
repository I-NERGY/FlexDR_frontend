import {Link, useParams} from 'react-router-dom'
import {useTheme} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Breadcrumb from "../components/layout/Breadcrumb";
import MLModel from "../components/SmartMetersInspection/MLModel";
import SmartMeter from "../components/SmartMetersInspection/SmartMeter";

const SmartMetersInspection = () => {
    const {id} = useParams()
    const theme = useTheme()

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

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={false} sx={{mt: 5}}>
                <MLModel/>
                <SmartMeter/>
            </Container>
        </>)
        ;
}

export default SmartMetersInspection;