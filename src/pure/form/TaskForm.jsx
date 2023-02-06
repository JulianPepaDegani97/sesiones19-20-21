import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/tasks.class';
import { v4 as uuid } from 'uuid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';



const TaskForm = ({add}) => {
  const nameRef = useRef('');
  const descRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  

  const initialValues = {
    nameR: '',
    descR: '',
    levelR: LEVELS.NORMAL,
  }

  const registerSchema = yup.object().shape(
    {
      nameR: yup.string().min(6, "This field must be at least 6 characters")
      .max(20, "This field must be up to 20 characters")
      .required(),
        descR: yup.string().min(10, "This field must be at least 10 characters")
        .max(35, "This field must be up to 35 characters").required(),
        levelR: yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING], "Invalid level").required(),
    }
)

  const addTask = (e) => {
    //e.preventDefault();
    console.log(e);
    e.levelR = levelRef.current.value;
    const newTask = new Task(uuid(), e.nameR, e.descR, false, e.levelR);
    console.log(newTask);
    add(newTask);
  }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={registerSchema}
    
    onSubmit={addTask}
>
    {({ values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
        <Form>
        <label htmlFor="inputName">Task name</label>
        <Field
              id="inputName"
              name="nameR"
              placeholder="task name"
              type="text"
              
          />
            {
                errors.nameR && touched.nameR && (
                    <ErrorMessage name='nameR' />)
                
            }

            <label htmlFor="inputDesc">Description</label>
            <Field
                id="inputDesc"
                name="descR"
                placeholder="description"
                type="text"               
            />
            {
                errors.descR && touched.descR && (
                    <ErrorMessage name='descR' />)
                
            }
           
            <label htmlFor='selectLevel' className='sr-only'>Priority</label>
          <select ref={levelRef}
           defaultValue={LEVELS.NORMAL} name='levelR' id='selectLevel'>
            <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
            <option value={LEVELS.URGENTE}>{LEVELS.URGENTE}</option>
            <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
          </select>

            <button type="submit">Register</button>
        </Form>
    )}              

</Formik>
    
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
}
export default TaskForm