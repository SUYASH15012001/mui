import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons';
import React from 'react'
import Controls from '../controls/Controls';

const useStyles = makeStyles(theme=> ({
    dialog:{
        position:'absolute',
        top:theme.spacing(5),
        padding:theme.spacing(2)
    },
    dialogContent:{
        textAlign:"center"
    },
    dialogAction:{
        justifyContent:"center"
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

export default function ConfirmDialog(props) {

    const {confirmDialog, setConfirmDialog } = props;

    const classes= useStyles();

    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogContent}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} 
                />
                <Controls.Button 
                    text="Yes" 
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}
