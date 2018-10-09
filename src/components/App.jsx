/* @flow */
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Home from './Home';
import style from '../theme/export.scss';
import '../theme/general.scss';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: style.colorPrimaryLight,
//       main: style.colorPrimary,
//       dark: style.colorPrimaryDark,
//       contrastText: style.colorWhite,
//     },
//     secondary: {
//       light: style.colorSecondaryLight,
//       main: style.colorSecondary,
//       dark: style.colorSecondaryDark,
//       contrastText: style.colorWhite,
//     },
//     error: {
//       main: style.colorDanger,
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   }
// });
const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo,
    error: red,
    contrastThreshold: 3,
    tonalOffset: .2,
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>
)

export default App;
