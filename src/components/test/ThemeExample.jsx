/* @flow */
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import s from './ThemeExample.scss';

type ThemeProps = {
};

const ThemeExample = (props: ThemeProps) => (
  <div className={s.root}>
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper className={s.paper}>
          <Typography variant="display4">Display 4</Typography>
          <Typography variant="display3">Display 3</Typography>
          <Typography variant="display2">Display 2</Typography>
          <Typography variant="display1">Display 1</Typography>
          <Typography variant="headline">Headline</Typography>
          <Typography variant="title">title</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="caption">caption</Typography>
          <Typography variant="button">button</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={s.paper}>
          Some other thing here
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default ThemeExample;
