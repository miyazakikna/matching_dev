import React from 'react';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import FirstViewLayout from './FirstViewLayout';
import Link from 'next/link';
import { useRouter } from 'next/router'

const backgroundImage =
  'https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg';

const styles = (theme: Theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
      marginTop: theme.spacing(4),
      borderRadius: 3,
    },
    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
  });

function FirstView(props: WithStyles<typeof styles>) {
  const { classes } = props;

  const router = useRouter()
  const signUp = () => {
    router.push('/signup')
  }

  return (
    <FirstViewLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Personal Training
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        いつでも どこにでも
        あなただけのコーチを
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={signUp}>
        今すぐ登録
      </Button>
    </FirstViewLayout>
  );
}

export default withStyles(styles)(FirstView);
