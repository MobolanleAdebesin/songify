import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Song} from '../App';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 280,
    width: 250,
    marginBottom: 100
  },
  control: {
    padding: theme.spacing(5),
  },
}));

interface Props{
    trackList: Song[];
}
 const NestedGrid: React.FC<Props> = ({...props}) =>{
  const classes = useStyles();
    console.log(props.trackList)
    // console.log(songList)
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12}>
        <Grid container justifyContent="center" spacing={2}>
          {props.trackList.map((value: Song) => (
            <Grid key={value.id} item>
              <Paper className={classes.paper} >
                    <iframe 
                src={`https://open.spotify.com/embed/track/${value.id}` } 
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
}

export default NestedGrid