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
    header: {
        textAlign: "center", 
       }, 
    root: {
        width: "100%", 
        height: 250, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },

    item: {
        margin: 'auto',
    },
    button: {
        margin: 30
    }
  }))
  