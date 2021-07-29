import React from "react";

import {Grid, Paper} from "@material-ui/core/";

import { Song } from "../App";

import {nestedGridStyles} from '../styles/appStyles'


interface Props {
  trackList: Song[];
}
const NestedGrid: React.FC<Props> = ({ ...props }) => {
  const classes = nestedGridStyles();
  
 
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12}>
        <Grid container justifyContent="center" spacing={2}>
          {props.trackList.map((value: Song) => (
            <Grid key={value.id} item>
              <Paper className={classes.paper}>
                <iframe
                  src={`https://open.spotify.com/embed/track/${value.id}`}
                  title={value.song}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="encrypted-media"
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NestedGrid;
