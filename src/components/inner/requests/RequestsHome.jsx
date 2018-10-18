/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import SideBar from '../general/Sidebar';
import TopBar from '../general/TopBar';
import Header from './Header';
import HorizontalMenu from './HorizontalMenu';
import { initGeneralDocuments } from '../../../actions/document';
import gs from '../../../theme/general.scss';
import s from './RequestsHome.scss';

type RequestsHomeProps = {
  initGeneralDocuments: any,
};
type RequestsHomeState = {};

class RequestsHome extends React.Component<RequestsHomeProps, RequestsHomeState> {
  componentDidMount() {
    this.props.initGeneralDocuments();
  }
  render() {
    return (
      <div className={s.root}>
        <TopBar />
        <SideBar />
        <main className={cn(gs.dflex, gs.flexcolumn, s.main)}>
          <Header />
          <HorizontalMenu />
        </main>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch, ownProps) => ({
    initGeneralDocuments: initGeneralDocuments(dispatch),
  })
)(RequestsHome);
