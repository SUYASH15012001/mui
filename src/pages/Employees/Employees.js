import React, { useState } from 'react'
// import EmployeeForm from './EmployeeForm'
import GroupIcon from '@material-ui/icons/Group';
import PageHeader from '../../Components/PageHeader'; 
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from '../../Components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../Components/controls/Controls';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme=> ({
    pageContent:{
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    },
    searchInput:{
        width:"75%"
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting:true },
]


function Employees() {
    const classes = useStyles();

    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const [filterFn, setFilterFn] = useState({fn:items => {return items;}})
    const {
        TblContainer, 
        TblHead, 
        TblPagination, 
        recordsAfterpaginationAndSorting
    } = useTable(records,headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn:items => {
                if(target.value==="")
                return items 
                else return items.filter(x => x.fullName.includes(target.value)) 
            }
        })

    }
    return (
        <>
            <PageHeader 
                title='New Employee'
                subtitle='Page Description'
                icon={<GroupIcon fontSize='large'/>}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm/> */}
                <Toolbar>
                    <Controls.Input 
                        className={classes.searchInput}
                        label="Search Employee"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                    {
                        recordsAfterpaginationAndSorting().map(item=> (
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
                <TblPagination/>
            </Paper>
        </>
    )
}

export default Employees
