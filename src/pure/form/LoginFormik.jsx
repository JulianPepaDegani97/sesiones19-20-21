import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Emailis required'),
    password: yup.string().required('Password is required'),
})
const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    

    return (
        <div>
            <h2>Login Form</h2>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        {
                            errors.email && touched.email && (
                                /*<div className='error'>
                                    <p>{errors.email}</p>
                                </div>*/
                                <ErrorMessage name='password' />
                            )
                        }
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {
                            errors.password && touched.password && (
                                /*<div className='error'>
                                    <p>{errors.password}</p>
                                </div>*/
                                <ErrorMessage name='password' />
                            )
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )}              

            </Formik>
        </div>
    )
}

export default LoginFormik