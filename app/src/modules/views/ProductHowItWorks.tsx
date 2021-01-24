import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { lineHeight } from '@material-ui/system';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.light,
      overflow: 'hidden',
    },
    container: {
      marginTop: theme.spacing(10),
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    item: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
      width: theme.spacing(50),
    },
    p: {
      textAlign: 'center',
      lineHeight: 2,
      fontSize: 15,
    },
    title: {
      // marginBottom: theme.spacing(14),
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
      height: 55,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
      opacity: 0.7,
    },
    button: {
      marginTop: theme.spacing(8),
    },
  });

function ProductHowItWorks(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          className={classes.title}
          component="h2">
          トレーナーが必要なあなたに
        </Typography>
        <div className={classes.item}>
          <p className={classes.p}>
            「セレクトトレーナー」は、あなたが必要とする技術をいつでもどこでもトレーナーから教わることができるパーソナルトレーナーマッチングサービスです
          </p>
        </div>
      </Container>
    </section >
  );
}
export default withStyles(styles)(ProductHowItWorks);
