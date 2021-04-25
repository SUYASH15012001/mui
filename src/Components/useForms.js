import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core';

export function useForms(initialValues) {

    const [values, setvalues] = useState(initialValues)
    const handleInputChange = (e) => {
        const {name, value}  = e.target;
        setvalues({
            ...values,
            [name]:value
        })
    }
    
    return {
        values,
        setvalues,
        handleInputChange
    }
}


const useStyles = makeStyles(theme=> ({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }
    }    
}))

export function Form(props) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
