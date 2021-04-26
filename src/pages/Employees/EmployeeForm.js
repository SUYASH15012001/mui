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


    const {values, handleInputChange, setError, error} = useForms(initialValues);

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName?"":"This field is required"
        temp.email = (/$^|.+@.+..+/).test(values.email)?"":"Enter a valid email "
        temp.mobile = values.mobile.length>9?"":"invalid Mobile no."
        temp.departmentId = values.departmentId.lengt!==0?"":"This field is required"
        setError({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) 
            alert('booya')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={error.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={error.email}
                    />
                    <Controls.Input
                        name="mobile"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={error.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={error.city}
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
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee ?"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            variant="contained"
                            color="primary"
                            size="large"
                            text="Submit"
                            type="submit"
                        />
                        <Controls.Button
                            text='Reset'
                            color="default"
                            type="reset"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
