import React from 'react';
import {Formik} from 'formik'; 

import { TextField, Button} from '@material-ui/core';

import * as yup from 'yup';

/**
 * 
 * @returns 
 */

/*
Set up the form 

 */

const validationSchema = yup.object({
  title: yup.string().required()
})

const App = () =>  {
  return (
    <div className="App">
      <Formik 

      initialValues={{title: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
          console.log(JSON.stringify(values))
          setSubmitting(false);
        }, 2000)
        resetForm();
      }}>{({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>

        <TextField 
        error={!!errors.title}
        helperText ="please enter a song title"
        name="title"
        placeholder="song title" 
        onChange={handleChange} 
        onBlur={handleBlur} 
        value ={values.title}
        label="Title"

        />
        {errors.title && touched.title && errors.title}
        <div>
        <Button type="submit" disabled={isSubmitting} variant="outlined" color="primary">Submit</Button>
        </div>
       
        </form>
      )}
    
      </Formik>
    </div>
  );
}

export default App;
