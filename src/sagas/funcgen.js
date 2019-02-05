import { put, call } from 'redux-saga/effects';
import {
  login,
  logout,
  loginFailed,
  signup,
  signupFailed,
  userUpdate,
  userAccessAsync,
  userTableContentRemove,
  privateDataAsync,
} from '../actions/actionCreators';
import {
  ajaxApi,
  uploadFileApi,
  downloadFileApi
} from './ajaxApi';

export function* loginEffectSaga(action) {
  try {
    const { data } = yield call(ajaxApi, 'POST', '/api/login',
      { ...action.payload });
    if (data === 'login_failed') {
      yield put(loginFailed());
    } else {
      localStorage.setItem('token', data);
      yield put(login(data));
    }
  } catch (e) {
    console.log(e);
  }
}
export function* logoutEffectSaga() {
  try {
    yield put(logout());
  } catch (e) {
    console.log(e);
  }
}
export function* signupSaga(action) {
  try {
    const { data } = yield call(ajaxApi, 'POST', '/api/usersignup', { ...action.payload });
    if (data === 'signupFailed') {
      yield put(signupFailed());
    } else {
      localStorage.setItem('token', data);
      yield put(signup(data));
    }
  } catch (e) {
    console.log(e);
  }
}
export function* userUpdateSaga(action) {
  const payload = {
    udata: action.payload,
    token: localStorage.getItem('token'),
  };
  try {
    const { data } = yield call(ajaxApi, 'PUT', '/api/userupdate', payload);
    yield put(userUpdate(data));
  } catch (e) {
    yield put(userUpdate('updateFailed'));
  }
}
export function* userAccess() {
  try {
    const payload = {
      token: localStorage.getItem('token'),
    };
    const { data } = yield call(ajaxApi, 'GET', '/api/userinfo', payload);
    yield put(userAccessAsync(data));
  } catch (e) {
    throw e;
  }
}
export function* userRemoveSaga(data) {
  const payload = {
    remail: data.payload.email,
  };
  try {
    yield call(ajaxApi, 'DELETE', '/api/userremove', payload);
    yield put(userTableContentRemove(data.payload.index));
  } catch (e) {
    console.log(e);
  }
}
export function* uploadFile(file) {
  try {
    yield call(uploadFileApi, file.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* privateDataSaga() {
  const payload = {
    token: localStorage.getItem('token'),
  };
  try {
    const { data } = yield call(ajaxApi, 'GET', '/api/privatedata', payload);
    yield put(privateDataAsync(data));
  } catch (e) {
    console.log(e);
  }
}
/**
 * 
 * @param {string} filename to save by own filename. file come from DownloadButton as props
 * @param {UUID} fileId to select filename at server we send request with fileId in headers
 * @todo error handling. present time error processed by console.
 * error - 404 error
 */
export function* downloadSaga(params) {
  const { fileId, filename } = params.payload;
  try {
    const { data } = yield call(downloadFileApi, fileId);
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  } catch (e) {
    console.log(e);
  }
}
