import React from 'react'
import './LoginForm.styles.css'
import { Formik, Form } from 'formik'
import { TextField } from '@mui/material';
import InputForm from '../Input/InputForm.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

const initialValues = {
    email: "",
    password: "",
}
const LoginForm = () => {
    return (
        <div className='login_form'>
            <Formik initialValues={initialValues} onSubmit={(values, formikHelpers) => {
                console.log(values)
                formikHelpers.resetForm()
            }}
            >
                {({ errors, isValid, touched }) => (
                    <Form>
                        <InputForm name='email' type='email' label='Email' as={TextField} />
                        <InputForm name='password' type='password' label='Password' as={TextField} />
                        <SubmitButton type='submit' size='large'>SignIn</SubmitButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm