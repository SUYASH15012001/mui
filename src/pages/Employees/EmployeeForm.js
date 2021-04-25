import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import {useForms, Form} from '../../Components/useForms';

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


function EmployeeForm() {

    const {values,setvalues, handleInputChnage} = useForms(initialValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined' 
                        label='Full Name' 
                        name='fullName'
                        value={values.fullName} 
                        onChange={handleInputChnage}
                    />
                    <TextField 
                        variant='outlined' 
                        label='Email'  
                        name='email'
                        value={values.email}
                        onChange={handleInputChnage}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
