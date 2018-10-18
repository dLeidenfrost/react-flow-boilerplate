/* @flow */
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import General from './General';
import Other from './Other';
import { PANEL_KEYS, PANELS } from '../../../../utils/globals';
import s from './ExpandiblePanelDispatcher.scss';

const { GENERAL, FINANCIAL_INFO, TRACKING, BOUNDED, OTHERS, INSTRUMENTATION } = PANEL_KEYS;

type PanelContentProps = {
  title: string,
  panel: string,
  expanded: string,
  onChange: any,
};

const ExpandiblePanelDispatcher = (props: PanelContentProps) => (
  <ExpansionPanel className={s.root} expanded={props.expanded === props.panel} onChange={props.onChange(props.panel)}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={s.heading}>{props.title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className={s.details}>
      {props.panel === GENERAL && <General />}
      {props.panel === OTHERS && <Other />}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default ExpandiblePanelDispatcher;