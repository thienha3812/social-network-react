import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';



function SnackBar(props) {    
    var {open , message , severity} = props
    const handleClose = () =>{
        props.handleClose()
    }
    return (
        <>
            <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={handleClose} style={{zIndex:10000}}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
            </Snackbar>
        </>
    )
}


export default SnackBar