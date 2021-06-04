import * as api from '../api';

export const registerUser = (values) =>({
    type: 'AUTH_USER',
    payload: api.registerUser(values)

})

export const clearAuthError = () =>({
    type: 'CLEAR_AUTH_ERROR',

})

export const loginUser = () =>({
    type: 'AUTH_USER',
    payload: api.registerUser(values)
})


export const autoSignIn = () =>({
    type: 'AUTH_SIGN_IN',
    payload: api.autoSignIn()
})

export const logoutUser = () =>({
    type: 'LOGOUT_USER',
    payload: api.logoutUser()
})