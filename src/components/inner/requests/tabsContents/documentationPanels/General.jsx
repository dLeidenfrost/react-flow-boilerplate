/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Divider from '@material-ui/core/Divider';
import Document from './Document';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import gs from '../../../../../theme/general.scss';
import s from './ExpandiblePanels.scss';

import type { DocumentStateType } from '../../../../../utils/types';

type GeneralProps = {
  documents: { [key: string]: DocumentStateType },
};

class General extends React.Component<GeneralProps, {}> {
  render() {
    const { documents } = this.props;
    return (
      <div className={cn(gs.dflex, gs.flexgrow, s.root)}>
        <List className={cn(gs.flexgrow, s.documentlist)}>
          {documents && Object.keys(documents).map((d, i) => (
            <div key={d}>
              <ListItem className={s.documentlistitem}>
                <Document
                  title={documents[d].title || ''}
                  filename={documents[d].filename || ''}
                  created={documents[d].created || ''}
                  id={d}
                />
              </ListItem>
              { i < (Object.keys(documents).length - 1) && <Divider /> }
            </div>
          ))}
          {!documents && <div>Sin documentos.</div>}
        </List>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) => ({
    documents: state.documents,
  }),
  () => ({}),
)(General);
