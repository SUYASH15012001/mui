import React, { useState } from 'react'
// import EmployeeForm from './EmployeeForm'
import GroupIcon from '@material-ui/icons/Group';
import PageHeader from '../../Components/PageHeader'; 
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import useTable from '../../Components/useTable';
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme=> ({
    pageContent:{
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
]


function Employees() {
    const classes = useStyles();

    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const {TblContainer, TblHead} = useTable(records,headCells);
    return (
        <>
            <PageHeader 
                title='New Employee'
                subtitle='Page Description'
                icon={<GroupIcon fontSize='large'/>}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm/> */}
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                    {
                        records.map(item=> (
                            <TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </TblContainer>
            </Paper>
        </>
    )
}

export default Employees
