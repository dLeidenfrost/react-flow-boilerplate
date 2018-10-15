/* @flow */
import * as React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import gs from '../../../theme/general.scss';
import s from './UserBlock.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

type UserBlockProps = {};
type StateProps = {
  open: boolean,
};

class UserBlock extends React.Component<UserBlockProps, StateProps> {
  anchorEl: any;
  state = {
    open: false,
  };

  constructor(props: UserBlockProps) {
    super(props);
    this.anchorEl = null;
  }

  handleToggle = (): void => {
    this.setState({ open: !this.state.open });
  }

  handleClose = (event: any): void => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={s.root}>
        <Grid
          container
          spacing={8}
          alignItems="center"
          justify="flex-start"
        >
          <Grid item xs={9}>
            <div className={cn(gs.dflex, gs.aligncenter, gs.justifybetween)}>
              <Typography variant="subheading">COMERCIAL</Typography>
              <div className={s.menucontainer}>
                <Button
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  className={cn(s.button, s.userbutton)}
                  variant="contained"
                  color="default"
                  onClick={this.handleToggle}
                >
                  <AccountCircle />
                  <ArrowDropDown />
                </Button>
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <MenuItem onClick={this.handleClose}>Nothing</MenuItem>
                          <MenuItem onClick={this.handleClose}>Here</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={cn(gs.dflex, gs.justifycenter)}>
              <IconButton className={s.button} aria-label="notification">
                <NotificationImportant />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UserBlock;
