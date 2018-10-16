/* @flow */
import React from 'react';
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
import logo from '../../assets/img/logo-mfm-white.svg';
import Person from '@material-ui/icons/Person';
import LockOutlined from '@material-ui/icons/LockOutlined';
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
      <div className={cn(s.root, gs.dflex, gs.aligncenter, gs.justifycenter)}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <div className={cn(gs.dflex, gs.alignstart, gs.justifycenter, s.logincontainer)}>
              <div className={s.login}>
                <div className={s.content}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.aligncenter, gs.justifycenter, s.content)}>
                        <img src={logo} className={s.logo} alt="Logotipo MFM" width="200px" />
                      </div>
                      <div className={s.divider} />
				              <h1 className={s.title}>Inner</h1>
                    </Grid>
                  </Grid>
                </div>
                <div className={s.content}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.alignstart, s.inputwrapper)}>
                        <Person className={s.icon}/>
                        <TextField
                          placeholder="ID de usuario"
                          defaultValue="dmartinez"
                          className={s.input}
                          fullWidth
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.alignstart, s.inputwrapper)}>
                        <LockOutlined className={s.icon}/>
                        <TextField
                          placeholder="Contraseña"
                          defaultValue="dmartinez"
                          type="password"
                          className={s.input}
                          fullWidth
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className={cn(gs.dflex, gs.aligncenter, gs.justifyend, s.content)}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.justifyend, gs.aligncenter, s.btnwrapper)}>
                        <Button 
                          onClick={this.onLogin} 
                          fullWidth
                          className={s.btn}
                          variant="flat" 
                          color="primary"
                        >
                          Iniciar Sesi&oacute;n
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <div className={cn(gs.dflex, gs.justifyend, gs.aligncenter)}>
                        <Button onClick={this.onLogin} variant="contained" color="primary">
                          Ingresar
                        </Button>
                      </div>
                    </Grid>
                  </Grid> */}
                </div>
              </div>
            </div>
            <div className={s.footer}>
              <span>© Todos los derechos reservados / MFM OPM®* SAPI DE CV SOFOM 2018</span>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Login);
