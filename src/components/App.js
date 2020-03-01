import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

class App extends React.Component {
  componentDidMount() {
    
  }

  render() {
    const { t } = this.props;

    return <div>{t('homepage.title')}</div>;
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);
