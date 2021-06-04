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

export const updateUserData = (values, user) =>({
    type: 'UPDATE_USER_DATA',
    payload: api.updateUserData(values, user)
})
 

//articles
export const getArticles = ()=>({
    type:'GET_ARTICLES',
    payload: api.getArticles()
})

export const getMoreArticles = (articles)=>({
    type:'GET_ARTICLES',
    payload: api.getMoreArticles(articles)
})