import React from 'react'
import { Field } from 'formik'
import { Box, TextField } from '@mui/material';
//import './input.styles.css'

const InputForm = ({ name, type, label, error, helperText }) => {
    return (
        <div>
            <Field name={name} type={type} color='primary' variant='outlined' label={label} fullWidth as={TextField} error={error} helperText={helperText} />
            <Box height={12} />
        </div>
    )
}

export default InputForm;