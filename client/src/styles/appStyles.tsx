import { makeStyles } from "@material-ui/core/"

export const nestedGridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 280,
      width: 400,
      marginBottom: 200,
    }
  }));

  export const containerStyles = makeStyles((theme) => ({
    root: {
        width: 500, 
        height: 250, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    item: {
        margin: 'auto',
    },
    button: {
        margin: 30
    }
  }))
  