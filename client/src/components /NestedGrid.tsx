import React, { Dispatch, SetStateAction, MouseEvent, } from "react";

import {Grid, Paper, Button} from "@material-ui/core/";

import { Song } from "../App";

import {nestedGridStyles} from '../styles/appStyles'


interface Props {
  trackList: Song[];
  setTrackList: Dispatch<SetStateAction<Song[]>>;
}
const NestedGrid: React.FC<Props> = ({ ...props }) => {
  const classes = nestedGridStyles();
   const trackList = props.trackList; 
   const setTrackList = props.setTrackList
  const removeSong = (evt: MouseEvent<HTMLButtonElement>) => {
    setTrackList(trackList.filter((song) => song.id !== evt.currentTarget.id))
  }
  
 
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12}>
        <Grid container justifyContent="center" spacing={2}>
          {trackList.map((value: Song) => (
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
                <Button variant="outlined" color="secondary" id={value.id} onClick={removeSong}>
                    Remove
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NestedGrid;
