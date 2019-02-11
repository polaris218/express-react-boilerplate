  export function login(data) {
    return { type: 'LOGIN_ASYNC', payload: data };
  }
  export function loginFailed() {
    return { type: 'LOGIN_FAILED' };
  }
  export function logout() {
    return { type: 'LOGOUT_ASYNC' };
  }
  export function signup(token) {
    return { type: 'SIGNUP_ASYNC', payload: token };
  }
  export function signupFailed() {
    return { type: 'SIGNUP_FAILED' };
  }
  export function userUpdate(token) {
    return { type: 'UPDATE_ASYNC', payload: token };
  }
  export function userTableContentRemove(index) {
    return { type: 'REMOVE_CONTENT_ASYNC', payload: index };
  }
  export function userAccessAsync(token) {
    return { type: 'USER_ACCESS_ASYNC', payload: token };
  }
  export function privateDataAsync(data) {
    return { type: 'PRIVATE_DATA_ASYNC', payload: data };
  }
  export function setOfferId(offerId) {
    return { type: 'SET_OFFERID_ASYNC', payload: offerId };
  }
  export function getOfferView(viewdata) {
    return { type: 'GET_OFFER_VIEW_ASYNC', payload: viewdata };
  }