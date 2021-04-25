import React from 'react'
import {makeStyles } from '@material-ui/core';



const useStyles=makeStyles({ 
    sideMenu:{
        display: 'flex',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#2b3053'
    }
})

const SideMenu =() => {

    const classes = useStyles()
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SideMenu
