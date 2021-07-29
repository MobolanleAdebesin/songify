import React, { useState, useEffect } from "react";

import Axios from "axios";
import * as yup from "yup";

import { Formik } from "formik";
import { TextField, Button, Container } from "@material-ui/core";
import NestedGrid from "./components /NestedGrid";

import {containerStyles} from './styles/appStyles';

export interface Song {
  artist: string;
  id: string;
  song: string;
}

const validationSchema = yup.object({
  title: yup.string().required(),
});


const App = () => {
  const emptySong: Song[] = [];

  const [trackList, setTrackList] = useState(emptySong);

  useEffect(() => {
    console.log(trackList);
  }, [trackList]);

  const classes = containerStyles();

  return (
    <div className="App">
      <Container className={classes.root}>
        <Formik
          initialValues={{ title: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            Axios.post("https://songify-app-api.herokuapp.com/search/post", {
              title: values.title,
            })
              .then((res) => {
                const songList: Song[] = res.data;
                setTrackList(songList);
                setSubmitting(false);
                resetForm();
              })
              .catch((err) => console.log(err));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                error={!!errors.title}
                helperText="please enter a song title"
                name="title"
                placeholder="song title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                label="Title"
              />
              <div>
                <Button
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                  variant="outlined"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
        </Container>
        {<NestedGrid trackList={trackList}></NestedGrid>}
    
    </div>
  );
};

export default App;
