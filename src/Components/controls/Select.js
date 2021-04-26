import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value, onChange, options } = props;

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect 
            naame={name}
            label={label}
            value={value}
            onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map((item) => (
                        <MenuItem value={item.id} label={item.title} key={item.id}/>
                    ))
                }
            </MuiSelect>    
        </FormControl>
    )
}