/* @flow */
import * as React from 'react';
import cn from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { DETAL_VIEW_TABS } from '../../utils/globals';
import Documentation from './tabsContents/Documentation';
import TabContent from './tabsContents/TabContent';
import gs from '../../../theme/layout.scss';
import s from './HorizontalMenu.scss';

type HorizontalMenuProps = {};
type HorizontalMenuState = {
  value: number,
};

class HorizontalMenu extends React.Component<HorizontalMenuProps, HorizontalMenuState> {
  state = {
    value: 3,
  }
  handleChange = (event: any, value: number): void => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <div className={cn(s.root, gs.dflex, gs.flexcolumn)}>
        <Tabs
          className={s.menu}
          classes={{ indicator: s.indicator, scrollButtonsAuto: s.scrollbutton }}
          value={value}
          onChange={this.handleChange}
          scrollable
          scrollButtons="auto"
        >
          {Object.keys(DETAL_VIEW_TABS).map(k => (
            <Tab
              key={k}
              className={s.menuitem}
              label={DETAL_VIEW_TABS[k].value}
              disabled={DETAL_VIEW_TABS[k].disabled}
            />
          ))}
        </Tabs>
        <TabContent index={value} />
      </div>
    );
  }
}

export default HorizontalMenu;
