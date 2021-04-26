import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core';

export function useForms(initialValues) {

    const [values, setvalues] = useState(initialValues)
    
    const [error, setError] = useState({})
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
        handleInputChange,
        error,
        setError
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
    const {children, ...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
