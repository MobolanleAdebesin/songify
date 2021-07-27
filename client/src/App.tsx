import React from 'react';
import {Formik} from 'formik'; 
import { TextField, Button} from '@material-ui/core';

/**
 * 
 * @returns 
 */

/*
Set up the form 

 */

const App = () =>  {
  return (
    <div className="App">
      <Formik initialValues={{title: ''}}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
          console.log(JSON.stringify(values))
          setSubmitting(false);
        }, 2000)
        resetForm();
      }}>{({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>

        <TextField 
        name="title"
        placeholder="song title" 
        onChange={handleChange} 
        onBlur={handleBlur} 
        value ={values.title}
        label="Title"
        />
        {errors.title && touched.title && errors.title}
        <Button type="submit" disabled={isSubmitting} variant="outlined" color="primary">Submit</Button>
        </form>
      )}
    
      </Formik>
    </div>
  );
}

export default App;
