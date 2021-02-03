import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
      marginBottom: '3ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-basic"
      className={classes.root}
      label={props.label}
      variant="outlined"
    />
  );
}
