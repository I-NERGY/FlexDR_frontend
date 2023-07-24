import { useParams } from 'react-router-dom'

const SmartMetersInspection = () => {
    const {id} = useParams()

    return (
        <>
            <h1>SmartMeterAssignment - ID: {id}</h1>
        </>);
}

export default SmartMetersInspection;