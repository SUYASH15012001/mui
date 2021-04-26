import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import GroupIcon from '@material-ui/icons/Group';
import PageHeader from '../../Components/PageHeader'; 
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from '../../Components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../Components/controls/Controls';
import { Add, EditOutlined, Search } from '@material-ui/icons';
import Popup from '../../Components/controls/Popup';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme=> ({
    pageContent:{
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    },
    searchInput:{
        width:"75%"
    },
    newButton :{
        position:'absolute',
        right:'0'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department'},
    { id: 'actions', label: 'Actions', disableSorting:true }
]


function Employees() {
    const classes = useStyles();

    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const [filterFn, setFilterFn] = useState({fn:items => {return items;}})

    const [openPopup, setOpenPopup] = useState(false);

    const [recordForEdit, setRecordForEdit] = useState(null);
    
    const addOrEdit = (employee, resetForm)  => {
        if(employee.id===0) employeeService.insertEmployee(employee)
        else employeeService.updateEmployee(employee) 
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }
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

    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader 
                title='New Employee'
                subtitle='Page Description'
                icon={<GroupIcon fontSize='large'/>}
            />
            <Paper className={classes.pageContent}>
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
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon = {<Add/>}
                        className={classes.newButton}
                        onClick={()=> {setOpenPopup(true); setRecordForEdit(null)}}
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
                                <TableCell>
                                    <Controls.ActionButton color='primary' onClick={()=>{openInPopup(item)}}>
                                        <EditOutlined fontSize="small"/>
                                    </Controls.ActionButton>
                                    <Controls.ActionButton color='secondary'>
                                        <CloseIcon fontSize="small"/>
                                    </Controls.ActionButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
            <Popup 
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit}/>
            </Popup>
        </>
    )
}

export default Employees
