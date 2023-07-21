import { useParams } from 'react-router-dom'

const SmartMetersAssignment = () => {
    const {id} = useParams()

    return (
        <>
            <h1>SmartMeterAssignment</h1>
        </>);
}

export default SmartMetersAssignment;