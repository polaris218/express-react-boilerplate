import { takeLatest } from 'redux-saga/effects';
import {
  loginEffectSaga,
  logoutEffectSaga,
  signupSaga,
  userUpdateSaga,
  userAccess,
  userRemoveSaga,
  uploadFile,
  privateDataSaga,
  downloadSaga,
  setOfferIdSaga,
  getOfferViewSaga
} from './funcgen';

/**
 * @todo remove repeated code and use middleware
 */
export default function* WatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
  yield takeLatest('LOGOUT_WATCHER', logoutEffectSaga);
  yield takeLatest('SIGNUP_WATCHER', signupSaga);
  yield takeLatest('USER_INFO_UPDATE_WATCHER', userUpdateSaga);
  yield takeLatest('USER_ACCESS_WATCHER', userAccess);
  yield takeLatest('USER_REMOVE_WATCHER', userRemoveSaga);
  yield takeLatest('UPLOAD_FILE_WATCHER', uploadFile);
  yield takeLatest('PRIVATE_FILE_DATA_WATCHER', privateDataSaga);
  yield takeLatest('DOWNLOAD_FILE_WATCHER', downloadSaga);
  yield takeLatest('SET_OFFERID_WATCHER', setOfferIdSaga);
  yield takeLatest('GET_OFFER_VIEW_WATCHER', getOfferViewSaga)
}
