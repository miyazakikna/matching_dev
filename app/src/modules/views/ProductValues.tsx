import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',

    },
    item: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    p: {
      textAlign: 'center',
      lineHeight: 2,
      fontSize: 15,
    },
    image: {
      height: 200,
      width: 200,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
    },

  });

function ProductValues(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" align="center" component="h2">
          こんな人におすすめ
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/illust_gem.png"
                alt="gem"
              />
              {/* <Typography variant="h6" className={classes.title}>
                The best luxury hotels
              </Typography> */}
              <p className={classes.p}>
                マンションにあるジムでトレーニングしたい！マシンの使い方がわからず利用したことがないプロを呼んで楽にトレーニング
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/illust_yoga.png"
                alt="yoga"
              />
              {/* <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography> */}
              <p className={classes.p}>
                ママ友と近所の公園でヨガ近くに良いスタジオがないせっかくだから近所でママ友とエンジョイ
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/illust_diet.png"
                alt="diet"
              />
              <p className={classes.p}>
                在宅ワークで太ってしまった…出社前に元の体に戻したい
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default withStyles(styles)(ProductValues);
