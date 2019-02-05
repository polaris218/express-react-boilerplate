import { bindActionCreators } from 'redux';
import {
  loginWatcher,
  logoutWatcher,
  signupWatcher,
  userInfoWatcher,
  userAccessWatcher,
  userRemoveWatcher,
  privacyWatcher,
  privateDataWatcher,
  downloadWatcher,
} from './watchers';

export const mapStateToProps = state => ({
  loginFailed: state.loginFailed,
  signupFailed: state.signupFailed,
  updateFailed: state.updateFailed,
  token: state.token,
  userAdmin: state.userAdmin,
  userData: state.userData,
  privateData: state.privateData,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loginWatcher,
  logoutWatcher,
  userInfoWatcher,
  userAccessWatcher,
  signupWatcher,
  userRemoveWatcher,
  privacyWatcher,
  privateDataWatcher,
  downloadWatcher,
}, dispatch
);
