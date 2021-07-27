import React, {useState, useEffect} from 'react';
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

interface Song {
  artist: string; 
  id: string; 
  song: string; 
}




const validationSchema = yup.object({
  title: yup.string().required()
})

const App = () =>  {
const [trackList, setTrackList] = useState([]); 
useEffect(() => {
  console.log(trackList)
}, [trackList])
  return (
    <div className="App">
      <Formik 

      initialValues={{title: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        Axios.post("https://songify-app-api.herokuapp.com/search/post",{
          title: values.title
        })
        .then(res => {
          setTrackList(res.data)
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
      {
        trackList.map((track: Song) => <iframe src={`https://open.spotify.com/embed/track/${track.id}` } title={track.song} width="100%" height="380" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>)
      }
      
    </div>
  );
}

export default App;
