import React from 'react';
import clsx from 'clsx';
import {withStyles, Theme, WithStyles, createStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
      },
    },
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(14),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
    },
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing(4),
    },
  });

interface FirstViewLayoutProps {
  backgroundClassName: string;
}

function FirstViewLayout(props: WithStyles<typeof styles> & React.HTMLAttributes<HTMLDivElement> & FirstViewLayoutProps) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        {/* <img
          className={classes.arrowDown}
          src="/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
        /> */}
        {/* <Image
          src="/productHeroArrowDown.png"
          className={classes.arrowDown}
          width={16}
          height={20}
          alt="arrow down" /> */}
      </Container>
    </section>
  );
}

export default withStyles(styles)(FirstViewLayout);
