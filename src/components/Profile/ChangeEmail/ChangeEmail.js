import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '../../UI/Input/Input';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

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
  flex: {
    display: 'flex',
  },
  label: {
    marginRight: 220,
  },
  input: {
    minWidth: 600,
  },
}));

export default function ChangeEmail(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState({
    email: props.email,
  });

  const changeEmailHandle = (e) => {
    setEmail({
      email: e.target.value,
    });
  };

  const emailHandle = () => {
    props.onChangeProfile(email.email);
    props.showEmail(true);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.flex}>
          <h3 className={classes.label}>Заміна Логіна(Ел.пошти)</h3>
          <IconButton
            aria-label="add an alarm"
            onClick={() => props.showEmail(true)}
          >
            <HighlightOffIcon />
          </IconButton>
        </div>
        <hr />
        <p>Введіть адрес електронної пошти</p>
        <Input
          label="Нова е.п"
          style={{ minWidth: '450px' }}
          value={email.email}
          className={classes.input}
          onChange={(e) => changeEmailHandle(e)}
        />
        <Grid item xs>
          <Button color="primary" onClick={() => emailHandle()}>
            Зберегти
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}
