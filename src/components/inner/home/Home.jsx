/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { setUser } from '../../../actions/user';
import { ROLES, AREAS } from '../../utils/globals';
import ProtectedBy from '../../auth/ProtectedBy';
import TopBar from '../general/TopBar';
import Sidebar from '../general/Sidebar';
import s from './Home.scss';

type HomeProps = {
  onTest: any,
};

class Home extends React.Component<HomeProps, {}> {
  onTest = () => {
    console.log('-- do some redux test --');
    this.props.onTest();
  }
  render() {
    return (
      <div className={s.root}>
        <TopBar />
        <Sidebar />
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

export default connect(
  (state, ownProps) => {
    console.log('-- current state --', state);
    return {};
  },
  (dispatch, ownProps) => ({
    onTest: () => dispatch(setUser()),
  })
)(Home);
