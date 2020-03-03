import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UserActions from '../../redux/UserRedux';

import './LoginPage.scss';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: UserActions.login,
}, dispatch);

class LoginPage extends React.Component {
  componentDidMount() {
    
  }

  handleLogin = () => {
    this.props.login('test', '12345').then(() => {
      alert('success');
    }).catch(() => {
      alert('error');
    });
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        {t('login.title')}
        <div onClick={this.handleLogin}>Login</div>
      </div>
    );
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);
