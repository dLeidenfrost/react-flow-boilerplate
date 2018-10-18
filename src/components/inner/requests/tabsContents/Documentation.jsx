/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { PANEL_KEYS, PANELS } from '../../../utils/globals';
import { initGeneralDocuments } from '../../../../actions/document';
import ExpandiblePanelDispatcher from './documentationPanels/ExpandiblePanelDispatcher';
import s from './Documentation.scss';

const { GENERAL, FINANCIAL_INFO, TRACKING, BOUNDED, OTHER, INSTRUMENTATION } = PANEL_KEYS;

type DocumentationProps = {
  initGeneralDocuments: any,
};
type DocumentationState = {
  expanded: string,
};

class Documentation extends React.Component<DocumentationProps, DocumentationState> {
  state = {
    expanded: '',
  }
  handleToggle = (panel: string) => (event: any, expanded: boolean): void => {
    this.setState({ expanded: expanded ? panel : '' });
  }
  render() {
    const { expanded } = this.state;
    return (
      <div className={s.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {PANELS.map(p => (
              <ExpandiblePanelDispatcher
                key={p.panel}
                title={p.title}
                panel={p.panel}
                expanded={expanded}
                onChange={this.handleToggle}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <ExpandiblePanelDispatcher
              title={'Comentarios'}
              panel={'COMMENTS'}
              expanded={expanded}
              onChange={this.handleToggle}
            />
          </Grid>
          <Grid item xs={12}>
            <ExpandiblePanelDispatcher
              title={'Bitácora'}
              panel={'LOG_FILE'}
              expanded={expanded}
              onChange={this.handleToggle}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    document: state.document,
  }),
  (dispatch, ownProps) => ({
    initGeneralDocuments: initGeneralDocuments(dispatch),
  })
)(Documentation);
