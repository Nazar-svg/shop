import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PetsIcon from '@material-ui/icons/Pets';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import Contacts from './Contacts/Contacts';
import Personal from './Personal/Personal';
import ChangeEmail from './ChangeEmail/ChangeEmail';
import HomePets from './HomePets/HomePets';

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
}));

export default function AutoGrid(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState({
    email: 'NazrarKols@',
  });
  const [profile, setProfile] = React.useState({
    name: 'Nazar',
    lastName: 'Kolos',
    pb: 'Sergiovuch',
    dateBorn: '31.05.1990p',
    selectSex: 'Оберіть стать',
    selectLeng: 'Оберіть мову',
  });
  const [show, setShow] = React.useState({
    showContacts: true,
    showPersonal: true,
    showEmail: true,
    showHomePets: true,
  });
  const [pets, setPets] = React.useState({
    dog: false,
    cat: false,
    fish: false,
  });

  const onChangePets = (dog, cat, fish) => {
    console.log('F', pets);
    setPets({
      ...pets,
      dog: dog,
      cat: cat,
      fish: fish,
    });
    console.log('x', pets);
  };

  const onChangePersonal = (item) => {
    console.log('A', profile);
    setProfile({
      ...profile,
      name: item.name,
      lastName: item.lastName,
      pb: item.pb,
      dateBorn: item.dateBorn,
      selectSex: item.selectSex,
      selectLeng: item.selectLeng,
    });
    console.log('B', profile);
  };
  const onChangeProfile = (value) => {
    setEmail({
      ...email,
      email: value,
    });
    console.log('email', email);
  };
  const showPersonal = (value) => {
    setShow({
      ...show,
      showPersonal: value,
    });
  };
  const showContacts = (value) => {
    setShow({
      ...show,
      showContacts: value,
    });
  };
  const showEmail = (value) => {
    setShow({
      ...show,
      showEmail: value,
    });
  };
  const showHomePets = (value) => {
    setShow({
      ...show,
      showHomePets: value,
    });
  };

  return (
    <>
      <h1 className={classes.title}>Особиті дані</h1>
      <div className={classes.root}>
        <div className={classes.box}>
          {show.showPersonal ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p className={classes.titleBox}>
                    <PermIdentityIcon className={classes.icon} />
                    Особиті дані
                  </p>
                </Grid>
                <Grid item xs>
                  <div className={classes.Btn}>
                    <Button color="primary" onClick={() => showPersonal(false)}>
                      Редагувати
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <span className={classes.span}>Прізвище</span>
                  <p className={classes.p}>{profile.lastName}</p>
                </Grid>
                <Grid item xs>
                  <span className={classes.span}>Імя</span>
                  <p className={classes.p}>{profile.name}</p>
                </Grid>
                <Grid item xs>
                  <span className={classes.span}>По баткові</span>
                  <p className={classes.p}>{profile.pb}</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <span className={classes.span}>Дата народження</span>
                  <p className={classes.p}>{profile.dateBorn}</p>
                </Grid>
                <Grid item xs>
                  <span className={classes.span}>Стать</span>
                  <p className={classes.p}>{profile.selectSex}</p>
                </Grid>
                <Grid item xs>
                  <span className={classes.span}>Мова</span>
                  <p className={classes.p}>{profile.selectLeng}</p>
                </Grid>
              </Grid>
            </>
          ) : (
            <Personal
              showPersonal={showPersonal}
              onChangePersonal={onChangePersonal}
              profile={profile}
            />
          )}
        </div>

        <div className={classes.box}>
          {show.showContacts ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p className={classes.titleBox}>
                    <MailOutlineIcon className={classes.icon} />
                    Контакти
                  </p>
                </Grid>
                <Grid item xs>
                  <div className={classes.Btn}>
                    <Button color="primary" onClick={() => showContacts(false)}>
                      Редагувати
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <span className={classes.span}>Електронна пошта</span>
                  <p className={classes.p}>{email.email}</p>
                </Grid>
              </Grid>
            </>
          ) : (
            <Contacts
              showContacts={showContacts}
              onChangeProfile={onChangeProfile}
              email={email.email}
            />
          )}
        </div>
        <div className={classes.box}>
          <Grid container spacing={3}>
            <Grid item xs>
              <p className={classes.titleBox}>
                <LocalShippingIcon className={classes.icon} />
                Адреса Доставки
              </p>
            </Grid>
            <Grid item xs>
              <div className={classes.Btn}>
                <Button color="primary">Редагувати</Button>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.box}>
          {show.showEmail ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p className={classes.titleBox}>
                    <EnhancedEncryptionIcon className={classes.icon} />
                    Логін
                  </p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <span className={classes.span}>Логін(електронна пошта)</span>
                  <p className={classes.p}>{email.email}</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Button
                    color="primary"
                    style={{ marginLeft: '50px' }}
                    onClick={() => showEmail(false)}
                  >
                    Редагувати
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <ChangeEmail
              showEmail={showEmail}
              onChangeProfile={onChangeProfile}
              email={email.email}
            />
          )}
        </div>

        <div className={classes.box}>
          {show.showHomePets ? (
            <>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p className={classes.titleBox}>
                    <PetsIcon className={classes.icon} />
                    Домашні тварини
                  </p>
                </Grid>
                <Grid item xs>
                  <div className={classes.Btn}>
                    <Button color="primary" onClick={() => showHomePets(false)}>
                      Редагувати
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <span>
                    <Checkbox checked={pets.dog} disabled />
                    собака
                  </span>
                </Grid>
                <Grid item xs>
                  <Checkbox checked={pets.cat} disabled />
                  <span>кіт</span>
                </Grid>
                <Grid item xs>
                  <Checkbox checked={pets.fish} disabled />
                  <span>рибки</span>
                </Grid>
              </Grid>
            </>
          ) : (
            <HomePets
              showHomePets={showHomePets}
              onChangePets={onChangePets}
              pets={pets}
            />
          )}
        </div>
      </div>
    </>
  );
}
