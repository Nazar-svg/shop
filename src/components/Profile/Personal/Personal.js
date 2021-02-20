import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import { NavLink } from 'react-router-dom';

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
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    marginRight: '15px',
  },
}));

export default function Personal(props) {
  const classes = useStyles();
  const [personal, setPersonal] = React.useState({
    name: props.profile.name,
    lastName: props.profile.lastName,
    pb: props.profile.pb,
    dateBorn: props.profile.dateBorn,
  });
  const changePersonal = () => {
    props.onChangePersonal(personal);
    props.showPersonal(true);
  };

  return (
    <>
      <div className={classes.boxes}>
        <Grid container spacing={3}>
          <Grid item xs>
            <h1 className={classes.titleBox}>
              <PermIdentityIcon className={classes.icon} />
              Особиті дані
            </h1>
          </Grid>
        </Grid>
        <form noValidate autoComplete="off">
          <Grid container>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Input
                  // label="Прізвище"
                  id="lastName"
                  onChange={(event) =>
                    setPersonal({ ...personal, lastName: event.target.value })
                  }
                  value={personal.lastName}
                />
              </li>
              <li className={classes.li}>
                <Input
                  // label="ім'я"
                  id="name"
                  value={personal.name}
                  onChange={(event) =>
                    setPersonal({ ...personal, name: event.target.value })
                  }
                />
              </li>
              <li className={classes.li}>
                <Input
                  // label="Побатькові"
                  value={personal.pb}
                  onChange={(event) =>
                    setPersonal({ ...personal, pb: event.target.value })
                  }
                />
              </li>
              <li className={classes.li}>
                <Input
                  value={personal.dateBorn}
                  onChange={(event) =>
                    setPersonal({ ...personal, dateBorn: event.target.value })
                  }
                />
              </li>
              <li className={classes.li}>
                <Select label="стать" option1="чоловіча" option2="жіноча" />
              </li>
              <li className={classes.li}>
                <Select
                  label="Мова спілкування"
                  value="Оберіть мову"
                  option1="Укр"
                  option2="Анг"
                />
              </li>
            </ul>
            <Button
              color="primary"
              onClick={() => changePersonal()}
              style={{ marginRight: '20px' }}
            >
              Зберегти
            </Button>
            <NavLink to={'/profile'}>
              <Button color="primary" onClick={() => props.showPersonal(true)}>
                Скасувати
              </Button>
            </NavLink>
          </Grid>
        </form>
      </div>
    </>
  );
}
