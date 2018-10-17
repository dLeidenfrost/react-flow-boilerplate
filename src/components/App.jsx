/* @flow */
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Analytics from './ga/Analytics';
import Router from './Router';
import style from '../theme/export.scss';
import '../theme/general.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: style.colorPrimaryLight,
      main: style.colorPrimary,
      dark: style.colorPrimaryDark,
      contrastText: style.colorWhite,
    },
    secondary: {
      light: style.colorSecondaryLight,
      main: style.colorSecondary,
      dark: style.colorSecondaryDark,
      contrastText: style.colorWhite,
    },
    error: {
      main: style.colorDanger,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: `2px solid ${style.colorLightestGrey}`,
        },
        '&$focused:after': {
          borderBottomColor: `${style.colorLightestGrey}`,
        },
        '&$error:after': {
          borderBottomColor: `${style.colorLightestGrey}`,
        },
        '&:before': {
          borderBottom: `1px solid ${style.colorLightestGrey}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${style.colorLightestGrey}`,
        },
        '&$disabled:before': {
          borderBottom: `1px dotted ${style.colorLightestGrey}`,
        },
      },
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Analytics />
    <Router />
  </MuiThemeProvider>
)

export default App;
