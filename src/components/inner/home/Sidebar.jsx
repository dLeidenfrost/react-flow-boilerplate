/* @flow */
import * as React from 'react';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid';
import UserBlock from './UserBlock';
import ProtectedBy from '../../auth/ProtectedBy';
import { PATHS } from '../../utils/globals';
import { clearJWT } from '../../../actions/token';
import LogoMfmBlack from '../../../assets/img/logo-mfm-black.svg';
import s from './Sidebar.scss';
import gs from '../../../theme/general.scss';
import exportStyle from '../../../theme/export.scss';
import { ROLES, AREAS } from '../../utils/globals';
import TrackEvent from '../../ga/TrackEvent';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboard, faUserTie, faBox, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

type SidebarProps = {
  history: any,
};
type SidebarState = {
  mobileOpen: boolean,
};

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  state = {
    mobileOpen: false,
  };
  menuItems: any = () => [
    { id: 1, title: 'Resumen', icon: faTachometerAlt, divider: null },
    { id: 2, title: 'Solicitudes', icon: faClipboard, divider: null },
    { id: 3, title: 'Especialistas', icon: faUserTie, divider: null },
    { id: 4, title: 'Pandora box', icon: faBox, divider: null },
    { id: 5, title: 'Configuración', icon: faCog, divider: null },
    { id: 6, title: 'Cerrar sesión', icon: faSignOutAlt, divider: <Divider style={{ marginTop: 48 }} />, action: this.onLogout },
  ]
  handleDrawerToggle = (): void => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }
  onLogout = (): void => {
    clearJWT();
    this.props.history.push(PATHS.LOGIN);
    TrackEvent({category:'User', action:'do logout on website', label:'logout'});
  }
  render() {
    return (
     <div className={s.root}>
      <AppBar position="absolute" className={s.appbar}>
        <Toolbar>
          <img src={LogoMfmBlack} width="200px" />
          <UserBlock />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: s.drawer,
        }}
      >
        <div className={s.sidebar}>
          <List>
            {this.menuItems().map(item => (
              <div key={item.id}>
                {item.divider}
                <ListItem onClick={item.action} button>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.icon} className={s.icon} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={s.main}>
        <div className={s.content}>
          <Typography noWrap>Add general content in here...</Typography>
          <ProtectedBy roles={[ROLES.DIRECTOR]} action="view">
            <Typography noWrap>This can only be viewed by area legal!</Typography>
          </ProtectedBy>
        </div>
      </main>
     </div> 
    )
  }
}

export default withRouter(Sidebar);
