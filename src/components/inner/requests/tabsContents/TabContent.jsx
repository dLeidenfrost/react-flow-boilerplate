/* @flow */
import * as React from 'react';
import cn from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Documentation from './Documentation';
import BusinessInfo from './BusinessInfo';
import ContactData from './ContactData';
import Credit from './Credit';
import References from './References';
import TransactionalProfile from './TransactionalProfile';
import Visits from './Visits';
import { DETAL_VIEW_TABS, TAB_KEYS } from '../../../utils/globals';
import gs from '../../../../theme/general.scss';
import s from './TabContent.scss';

type TabContentProps = {
  index: number,
};
type TabContentState = {
  completed: number,
};

class TabContent extends React.Component<TabContentProps, TabContentState> {
  state = {
    completed: 20,
  }
  render() {
    const key: string = Object.keys(DETAL_VIEW_TABS)[this.props.index];
    return (
      <div className={cn(gs.dflex, gs.flexgrow, s.root)}>
        <div className={s.maincontent}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container className={gs.flexgrow} spacing={24}>
                <Grid item xs={12}>
                  <LinearProgress
                    className={s.progressbar}
                    classes={{ barColorPrimary: s.bar }}
                    variant="determinate"
                    value={this.state.completed}
                  />
                </Grid>
                <Grid item xs={12}>
                  {key === TAB_KEYS.CONTACT_DATA && <ContactData />}
                  {key === TAB_KEYS.BUISNESS_INFO && <BusinessInfo />}
                  {key === TAB_KEYS.TRANSACTIONAL_PROFILE && <TransactionalProfile />}
                  {key === TAB_KEYS.DOCUMENTATION && <Documentation />}
                  {key === TAB_KEYS.VISITS && <Visits />}
                  {key === TAB_KEYS.REFERENCES && <References />}
                  {key === TAB_KEYS.CREDIT && <Credit />}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={cn(gs.flexgrow, s.rightbar)} />
      </div>
    );
  }
}

export default TabContent;
