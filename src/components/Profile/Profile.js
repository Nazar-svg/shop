import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '../UI/CheckBox/CheckBox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PetsIcon from '@material-ui/icons/Pets';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import Contacts from './Contacts/Contacts';
import Personal from './Personal/Personal';
import ChangeEmail from './ChangeEmail/ChangeEmail';

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
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [profile, setProfile] = React.useState({
    name: 'Nazar',
    lastName: 'Kolos',
    pb: 'Не вказано',
    dateBorn: 'Не вказано',
    showContacts: true,
    showPersonal: true,
    showEmail: true,
    email: '',
  });
  const showPersonal = (value) => {
    setProfile({
      ...profile,
      showPersonal: value,
    });
  };
  const showContacts = (value) => {
    setProfile({
      ...profile,
      showContacts: value,
    });
  };
  const showEmail = (value) => {
    setProfile({
      ...profile,
      showEmail: value,
    });
  };

  const onChangeProfile = (value, property) => {
    setProfile({
      ...profile,
      email: value,
      showContacts: false,
    });
    console.log('value', profile);
  };

  return (
    <>
      <h1 className={classes.title}>Особиті дані</h1>
      <div className={classes.root}>
        <div className={classes.box}>
          {profile.showPersonal ? (
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
                  <p className={classes.p}>Не вказана</p>
                </Grid>
                <Grid item xs>
                  <span className={classes.span}>Мова</span>
                  <p className={classes.p}>Українська</p>
                </Grid>
              </Grid>
            </>
          ) : (
            <Personal showPersonal={showPersonal} />
          )}
        </div>

        <div className={classes.box}>
          {profile.showContacts ? (
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
                  <p className={classes.p}>{profile.email}</p>
                </Grid>
              </Grid>
            </>
          ) : (
            <Contacts
              showContacts={showContacts}
              onChangeProfile={onChangeProfile}
              email={profile.email}
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
          {profile.showEmail ? (
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
                  <p className={classes.p}>solodka_sveta@i.ua</p>
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
            <ChangeEmail showEmail={showEmail} />
          )}
        </div>

        <div className={classes.box}>
          <Grid container spacing={3}>
            <Grid item xs>
              <p className={classes.titleBox}>
                <PetsIcon className={classes.icon} />
                Домашні тварини
              </p>
            </Grid>
            <Grid item xs>
              <div className={classes.Btn}>
                <Button color="primary">Редагувати</Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <span>
                <Checkbox />
                собака
              </span>
            </Grid>
            <Grid item xs>
              <Checkbox />
              <span>кіт</span>
            </Grid>
            <Grid item xs>
              <Checkbox />
              <span>рибки</span>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Checkbox />
              <span>пташка</span>
            </Grid>
            <Grid item xs>
              <Checkbox />
              <span>гризун</span>
            </Grid>
            <Grid item xs>
              <Checkbox />
              <span>земноводне</span>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
