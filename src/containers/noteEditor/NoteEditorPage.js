import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import './NoteEditorPage.scss';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

class NoteEditorPage extends React.Component {
  componentDidMount() {
    
  }

  render() {
    const { t } = this.props;

    return (
      <div>{t('noteeditor.title')}</div>
    );
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(NoteEditorPage);
