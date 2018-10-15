/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { setUser } from '../../../actions/user';
import Sidebar from './Sidebar';

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
      <div>
        <Sidebar />
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
