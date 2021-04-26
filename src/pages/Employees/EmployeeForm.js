import React from 'react'
import { Grid } from '@material-ui/core';
import {useForms, Form} from '../../Components/useForms';
import Controls from "../../Components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const initialValues = {
    id:0,
    fullName:'',
    email:"",
    mobile:"",
    city:"",
    gender:"male",
    departmentId:'',
    hiredate:new Date(),
    isPermanent:false
}

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

function EmployeeForm() {

    const {values,setvalues, handleInputChange} = useForms(initialValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />                    
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
