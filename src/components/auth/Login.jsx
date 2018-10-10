/* @flow */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect, withRouter } from 'react-router-dom';
import cn from 'classnames';
import { setJWT, getJWT } from '../../actions/token';
import { getRandomJWT } from '../utils/helpers';
import { PATHS } from '../utils/globals';
import logo from '../../assets/img/test.png';
import s from './Login.scss';
import gs from '../../theme/general.scss';

// Variants = ["display4","display3","display2","display1","headline","title","subheading","body2","body1","caption","button","srOnly","inherit"]
type LoginProps = {
  history: any,
  location: any,
};
type LoginState = {
  username: string,
  password: string,
};

class Login extends React.Component<LoginProps, LoginState> {
  onLogin = () => {
    const { history } = this.props;
    const { from } = this.props.location.state || { from: { pathname: PATHS.HOME } }
    setJWT(getRandomJWT(30));
    history.push(from.pathname);
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: PATHS.HOME } };
    if (getJWT() && from) return <Redirect to={from} />;
    return (
      <div className={cn(s.root)}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <div className={cn(gs.dflex, gs.alignstart, gs.justifycenter, s.logincontainer)}>
              <Paper>
                <div className={s.content}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.aligncenter, gs.justifycenter)}>
                        <img src={logo} width="100px" />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className={s.divider} />
                <div className={s.content}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Usuario"
                        defaultValue="dmartinez"
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Contraseña"
                        defaultValue="dmartinez"
                        type="password"
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={s.divider} />
                <div className={cn(gs.dflex, gs.aligncenter, gs.justifyend, s.content)}>
                  <Grid container spacing={0}>
                    <Grid item xs={8} sm={8}>
                      <div className={cn(gs.dflex, gs.aligncenter, gs.fullheight)}>
                        <Link to="/recover">¿Olvidaste tu contraseña?</Link>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <div className={cn(gs.dflex, gs.justifyend, gs.aligncenter)}>
                        <Button onClick={this.onLogin} variant="contained" color="primary">
                          Ingresar
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Login);
