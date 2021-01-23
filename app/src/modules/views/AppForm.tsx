import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';
import Paper from '../components/Paper';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundRepeat: 'no-repeat',
    },
    paper: {
      padding: theme.spacing(4, 3),
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8, 6),
      },
    },
});

function AppForm(props: WithStyles<typeof styles> & React.HTMLAttributes<HTMLDivElement>,) {
  const { children, classes } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        {/* <Box sx={{ mt: 7, mb: 12 }}> */}
         <Box textAlign="center">
          <Paper className={classes.paper} background="light">
            {children}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default withStyles(styles)(AppForm);
