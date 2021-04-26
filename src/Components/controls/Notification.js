import { makeStyles, Snackbar } from '@material-ui/core';
import React from 'react'
import {Alert} from '@material-ui/lab'

const useStyles = makeStyles(theme=> ({
    root:{
        top: theme.spacing(9)
    }
}))

export default function Notification(props) {
    
    const {notify, setNotify } =props;

    const classes = useStyles()

    const handleClose = (e,reason) => {
        if(reason==='clickaway')
        {
            return;
        }
        setNotify({
            ...notify,
            isOpen:false
        })
    }
    // 59:38
    return (
        <Snackbar 
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{vertical:'top', horizontal:'right'}}
            className={classes.root}
            onClose={handleClose}
        >
            <Alert severity={notify.type}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
