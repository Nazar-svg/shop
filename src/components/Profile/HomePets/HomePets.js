import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import PetsIcon from '@material-ui/icons/Pets';

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
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    marginRight: '230px',
    marginBottom: 50,
  },
  btnGrup: {
    marginLeft: '20px',
    marginTop: '30px',
    display: 'block',
  },
}));

export default function HomePets(props) {
  const classes = useStyles();
  // const [checked, setChecked] = React.useState({
  //   dog: props.pets.dog,
  //   ket: props.pets.ket,
  //   fish: props.pets.fish,
  // });
  // const handleChange = (event) => {
  //   const { name, checked } = event.target;
  //   setChecked({ ...checked, [name]: checked });
  // };

  const [dog, setDog] = React.useState(props.pets.dog);
  const handleChangeDog = (event) => {
    setDog(event.target.checked);
  };

  const [cat, setCat] = React.useState(props.pets.cat);
  const handleChangeCat = (event) => {
    setCat(event.target.checked);
  };
  const [fish, setFish] = React.useState(props.pets.fish);
  const handleChangeFish = (event) => {
    setFish(event.target.checked);
  };

  const changePets = () => {
    props.onChangePets(dog, cat, fish);
    props.showHomePets(true);
  };

  return (
    <>
      <h1 className={classes.title}>Особиті дані</h1>
      <div className={classes.box}>
        <Grid container spacing={3}>
          <Grid item xs>
            <p className={classes.titleBox}>
              <PetsIcon className={classes.icon} />
              Домашні тварини
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <span>
              <Checkbox
                checked={dog}
                onChange={handleChangeDog}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              собака
            </span>
          </Grid>
          <Grid item xs>
            <span>
              <Checkbox
                checked={cat}
                onChange={handleChangeCat}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              кіт
            </span>
          </Grid>
          <Grid item xs>
            <span>
              <Checkbox
                checked={fish}
                onChange={handleChangeFish}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              риби
            </span>
          </Grid>
        </Grid>

        <div className={classes.btnGrup}>
          <Button
            color="primary"
            onClick={() => changePets()}
            style={{ marginRight: '20px' }}
          >
            Зберегти
          </Button>
          <Button color="primary" onClick={() => props.showHomePets(true)}>
            Скасувати
          </Button>
        </div>
      </div>
    </>
  );
}
