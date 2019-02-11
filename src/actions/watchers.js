export function loginWatcher(authParams) {
    return { type: 'LOGIN_WATCHER', payload: authParams };
}
export function logoutWatcher() {
    return { type: 'LOGOUT_WATCHER' };
}
export function signupWatcher(file) {
    return { type: 'SIGNUP_WATCHER', payload: file };
}
export function userRemoveWatcher(email) {
    return { type: 'USER_REMOVE_WATCHER', payload: email };
}
export function userAccessWatcher() {
    return { type: 'USER_ACCESS_WATCHER' };
}
export function offerDataWatcher() {
    return { type: 'PRIVATE_FILE_DATA_WATCHER' };
}
export function userInfoWatcher(authParams) {
    return { type: 'USER_INFO_UPDATE_WATCHER', payload: authParams };
}
export function privacyWatcher(authParams) {
    return { type: 'UPLOAD_FILE_WATCHER', payload: authParams };
}
export function downloadWatcher(fileId) {
    return { type: 'DOWNLOAD_FILE_WATCHER', payload: fileId };
}
  