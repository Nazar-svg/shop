import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '../../UI/Input/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'grey',
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    minHeight: 200,
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  input: {
    width: 480,
  },
}));

export default function ChangeEmail(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3>Заміна Логіна(Ел.пошти)</h3>
        <hr />
        <p>Введіть адрес електронної пошти</p>
        <Input label="Нова е.п" style={{ width: '450px' }} />
        <Grid item xs>
          <Button
            color="primary"
            disabled
            onClick={() => props.showEmail(true)}
          >
            Зберегти
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}
