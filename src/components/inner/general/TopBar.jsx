/* @flow */
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UserBlock from './UserBlock';
import LogoMfmBlack from '../../../assets/img/logo-mfm-black.svg';
import s from './TopBar.scss';

type TopBarProps = {}

const TopBar = (props: TopBarProps) => (
  <div className={s.root}>
    <AppBar position="absolute" className={s.appbar}>
      <Toolbar>
        <img src={LogoMfmBlack} width="200px" />
        <UserBlock />
      </Toolbar>
    </AppBar>
  </div>
);

export default TopBar;
