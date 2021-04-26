import React, { useEffect } from 'react'
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

function EmployeeForm(props) {

    const {addOrEdit, recordForEdit} = props;


    const validate = (fieldvalues = values) => {
        let temp = {...error}
        if('fullName' in fieldvalues) temp.fullName = fieldvalues.fullName?"":"This field is required"

        if('email' in fieldvalues) temp.email = (/$^|.+@.+..+/).test(fieldvalues.email)?"":"Enter a valid email "
        if('mobile' in fieldvalues) temp.mobile = fieldvalues.mobile.length>9?"":"invalid Mobile no."
        if('departmentId' in fieldvalues) temp.departmentId = fieldvalues.departmentId.length!==0?"":"This field is required"
        setError({
            ...temp
        })

        if(fieldvalues===values) return Object.values(temp).every(x => x === "")
    }


    const {values, setvalues,  handleInputChange, setError, error, resetForm} = useForms(initialValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) 
            addOrEdit(values, resetForm)
    }

    useEffect(()=>{
        if(recordForEdit!==null){
            setvalues({...recordForEdit})
        }
    },[recordForEdit])
    
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
                        error={error.departmentId} 
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
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
