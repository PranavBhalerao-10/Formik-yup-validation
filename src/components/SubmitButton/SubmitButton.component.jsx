import React from 'react'
import { Button } from '@mui/material';
const SubmitButton = ({ children, type, size }) => {
    return (
        <div>
            <Button type={type} variant='contained' color='primary' size={size}>{children}</Button>
        </div>
    )
}

export default SubmitButton