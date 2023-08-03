import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AlertCustom = ({open, actionClose, severity, message}) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={actionClose}>
            <Alert variant="filled" onClose={actionClose} severity={severity} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default AlertCustom;