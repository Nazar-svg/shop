import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Input from '../../UI/Input/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    padding: '0 50px',
    marginLeft: '200px',
  },
  box: {
    marginBottom: '70px',
  },
  title: {
    marginLeft: '40px',
  },
  paper: {
    padding: theme.spacing(1),
    display: 'block',
  },
  titleBox: {
    margin: '40px',
    fontSize: '25px',
    fontWeight: 700,
  },
  span: {
    marginLeft: '60px',
    fontSize: '15px',
    fontWeight: 200,
  },
  p: {
    marginLeft: '60px',
    fontSize: '22px',
    fontWeight: 400,
    padding: 0,
    margin: 5,
  },
  Btn: {
    margin: '40px',
    marginLeft: '320px',
  },
  icon: {
    width: '35px',
    height: '35px',

    position: 'relative',
    top: '8px',
    left: '-20px',
    right: 0,
  },
  boxes: {
    width: '1091px',
    height: '300px',
    border: '2px solid #c1c1c1',
    padding: '20px',
    paddingBottom: '50px',
  },
  ul: {
    marginLeft: '360px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    marginRight: '15px',
  },
  btnGrup: {
    marginLeft: '360px',
    marginTop: '60px',
    display: 'block',
  },
}));

export default function Contacts(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: props.email,
  });
  const handleChange = (event) => {
    setState({
      email: event.target.value,
    });
  };
  const onChangeEmail = () => {
    props.onChangeProfile(state.email);
    props.showContacts(true);
  };

  return (
    <>
      <h1 className={classes.title}>Особиті дані</h1>
      <div className={classes.boxes}>
        <Grid container spacing={3}>
          <Grid item xs>
            <h1 className={classes.titleBox}>
              <MailOutlineIcon className={classes.icon} />
              Контакти
            </h1>
          </Grid>
        </Grid>
        <form noValidate autoComplete="off">
          <Grid container>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Input
                  label="Ел.адрес"
                  value={state.email}
                  onChange={(event) => handleChange(event)}
                />
              </li>
            </ul>
            <div className={classes.btnGrup}>
              <Button
                color="primary"
                onClick={() => onChangeEmail()}
                style={{ marginRight: '20px' }}
              >
                Зберегти
              </Button>
              <Button color="primary" onClick={() => props.showContacts(true)}>
                Скасувати
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
}
