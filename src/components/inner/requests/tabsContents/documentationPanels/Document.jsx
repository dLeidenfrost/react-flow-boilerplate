/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NoteIcon from '@material-ui/icons/Note';
import GetAppIcon from '@material-ui/icons/GetApp';
import { updateDocument } from '../../../../../actions/document';
import gs from '../../../../../theme/general.scss';
import s from './Document.scss';

import type { DocumentStateType } from '../../../../../utils/types';

type DocumentProps = {
  id: string,
  title: string,
  filename: string,
  created: string,
  updateDocument: any,
};
type DocumentState = {};

class Document extends React.Component<DocumentProps, DocumentState> {
  handleDocument = (event: any): void => {
    console.log('-- got something in here --', event.target.files);
    if (event.target.files) {
      const file = event.target.files[0];
      const { id, title } = this.props;
      const document: DocumentStateType = {
        title: title,
        filename: file.name,
        created: moment(file.lastModified).locale('es').toISOString(),
      };
      console.log('-- set this document --', document, id);
      this.props.updateDocument(id, document);
    }
  }
  render() {
    const { id, title, filename, created } = this.props;
    return (
      <Grid className={s.root} container spacing={8}>
        <Grid item xs={12}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={10}>
              <Typography variant="body2">{`* ${title}`}</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className={cn(gs.dflex, gs.justifyend)}>
                <Button
                  variant="raised"
                  color="primary"
                  component="label"
                >
                  Subir archivo
                  <input
                    accept="application/pdf"
                    style={{ display: 'none' }}
                    id="button-file"
                    type="file"
                    onChange={this.handleDocument}
                  />
                </Button>
              </div>
            </Grid>
          </Grid>
          {
            created && filename &&
            <Grid container classes={{ container: s.container }} spacing={8} alignItems="center">
              <Grid item xs={8}>
                <div className={cn(gs.dflex, gs.aligncenter)}>
                  <Typography classes={{ root: s.filename }} color="primary" variant="caption">
                    <Icon classes={{ root: s.icon }} color="primary"><NoteIcon /></Icon>{filename || 'N/A'}
                  </Typography>
                  <Typography variant="caption">
                    {created && moment(created).locale('es').format('DD MMM YYYY HH:MM:SS')}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={cn(gs.dflex, gs.justifyend)}>
                  <div className={cn(gs.dflex, gs.aligncenter)}>
                    <IconButton>
                      <GetAppIcon />
                    </IconButton>
                    <div className={s.verticaldivider} />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          }
        </Grid>
      </Grid>
    )
  }
}

export default connect(
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({
    updateDocument: updateDocument(dispatch),
  })
)(Document);
