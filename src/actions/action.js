import { bindActionCreators } from 'redux';
import {
  loginWatcher,
  logoutWatcher,
  signupWatcher,
  userInfoWatcher,
  userAccessWatcher,
  userRemoveWatcher,
  privacyWatcher,
  offerDataWatcher,
  downloadWatcher,
  setOfferIdWatcher,
  getOfferViewWatcher
} from './watchers';

export const mapStateToProps = state => ({
  loginFailed: state.loginFailed,
  signupFailed: state.signupFailed,
  updateFailed: state.updateFailed,
  token: state.token,
  userAdmin: state.userAdmin,
  userData: state.userData,
  offerData: state.offerData,
  viewData: state.viewData,
  offerId: state.offerId,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loginWatcher,
  logoutWatcher,
  userInfoWatcher,
  userAccessWatcher,
  signupWatcher,
  userRemoveWatcher,
  privacyWatcher,
  offerDataWatcher,
  downloadWatcher,
  setOfferIdWatcher,
  getOfferViewWatcher,
}, dispatch
);
