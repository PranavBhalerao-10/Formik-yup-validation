import React from 'react'
import './RegisterForm.styles.css'
import { Formik, Form } from 'formik'
import { TextField } from '@mui/material';
import InputForm from '../Input/InputForm.component';
import { object, string } from 'yup'
import SubmitButton from '../SubmitButton/SubmitButton.component';

const initialValues = {
    email: "",
    name: "",
    password: "",
}
const RegisterForm = () => {
    return (
        <div className='login_form'>
            <Formik initialValues={initialValues} onSubmit={(values, formikHelpers) => {
                console.log(values)
                formikHelpers.resetForm()
            }}
                validationSchema={object({
                    email: string().required("Please enter your email").email("Enter a valid email"),
                    name: string().required("Enter your name").min(3, "Name too short").max(25, "Name too long"),
                    password: string().required("Enter Password").min(8, "Password must be atleast 8 characters")
                })}
            >
                {({ errors, isValid, touched }) => (
                    <Form>
                        <InputForm name='email' type='email' label='Email' as={TextField} error={Boolean(errors.email) && Boolean(touched.email)} helperText={Boolean(touched.email) && errors.email} />
                        <InputForm name='name' type='text' label='Name' as={TextField} error={Boolean(errors.email) && Boolean(touched.name)} helperText={Boolean(touched.name) && errors.name} />
                        <InputForm name='password' type='password' label='Password' as={TextField} error={Boolean(errors.email) && Boolean(touched.password)} helperText={Boolean(touched.password) && errors.password} />
                        <SubmitButton type='submit' size='large'>SignUp</SubmitButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm