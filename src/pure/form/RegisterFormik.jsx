import React from 'react'
import { USERROLES } from '../../models/roles.enum'
import { User } from '../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        rol: USERROLES.USER
    }
    const registerSchema = yup.object().shape(
        {
            username: yup.string()
            .min(6, "Username must be at least 6 characters")
            .max(12, "Username must be shorter than 12 characters").required,
            email: yup.string().email('Invalid email address').required,
            password: yup.string().required,
            rol: yup.string().oneOf([USERROLES.USER, USERROLES.ADMIN], "Invalid user rol").required,
            confirmPassword: yup.string().when("password", {
                is: value => (value && value.lenght >0 ? true : false),
                then: yup.string().oneOf([yup.ref("password")], "Password does not match")
            }).required
        }
    )

    const submit = (values) => {

    }
  return (
    <div>
        <h2>Register Form</h2>
        <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                    <label htmlFor="username">Email</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="username"
                            type="text"
                        />
                        {
                            errors.username && touched.username && (
                                <ErrorMessage name='username' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        {
                            errors.email && touched.email && (
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
                                <ErrorMessage name='password' />
                            )
                        }
                        <label htmlFor="confirmPassword">Password</label>
                        <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirm password"
                            type="password"
                        />
                        {
                            errors.confirmPassword && touched.confirmPassword && (
                                <ErrorMessage name='confirmPassword' />
                            )
                        }
                        <button type="submit">Register</button>
                    </Form>
                )}              

            </Formik>

    </div>
  )
}

export default RegisterFormik