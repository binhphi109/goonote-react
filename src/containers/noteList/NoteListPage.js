import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import './NoteListPage.scss';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

class NoteListPage extends React.Component {
  componentDidMount() {
    
  }

  render() {
    const { t } = this.props;

    return (
      <div>{t('notelist.title')}</div>
    );
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(NoteListPage);
