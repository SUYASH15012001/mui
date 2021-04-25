import React from 'react'
import EmployeeForm from './EmployeeForm'
import GroupIcon from '@material-ui/icons/Group';
import PageHeader from '../../Components/PageHeader'; 
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=> ({
    pageContent:{
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    }
}))

function Employees() {
    const classes = useStyles();
    return (
        <>
            <PageHeader 
                title='New Employee'
                subtitle='Page Description'
                icon={<GroupIcon fontSize='large'/>}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>
        </>
    )
}

export default Employees
