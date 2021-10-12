import React from 'react';
import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup';

const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

export const FormikForm = () => {
    return (
        <>
            <Formik
             initialValues={{
                 username: '',
                 password: '',
             }}
             validationSchema={Yup.object({
                 username: Yup.string()
                 .min(3, 'Must be at least 3 characters long')
                 .max(15, 'Must be 15 characters or less')
                 .required('Required'),
                 password: Yup.string()
                 .min(8, 'Must be at least 8 characters long')
                 .max(56, 'Must be 56 characters of less')
             })}
             onSubmit={(values, {setSubmitting, resetForm}) => {
                 setTimeout(() => {
                     alert(JSON.stringify(values, null ,2))
                     resetForm()
                     setSubmitting(false)
                 }, 3000)
             }}
            >
                {props => (
                    <Form>
                        <h1>Formik Login Form</h1>
                        <CustomInput label="username" name="username" type="text" placeholder="username"/>
                        <CustomInput label="password" name="password" type="password" placeholder="password"/>
                    </Form>
                )}
            </Formik>
        </>
    )
}