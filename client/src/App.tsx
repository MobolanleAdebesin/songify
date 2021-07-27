import React from 'react';
import {Formik} from 'formik'; 
import Axios from 'axios';
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
        Axios.post("https://songify-app-api.herokuapp.com/search/post",{
          title: values.title
        } 
          
        ).then(res => {
          console.log(res)
          setSubmitting(false);
          resetForm();
        })
        .catch(err => console.log(err))
      
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
