const initState = {
    authError: null
}

const authReducer = (store = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        console.log('Login Success');
        return {
            ...store,
            authError: null
        }
        case 'LOGIN_FAILED':
        console.log('Login failed')
        return{
            ...store,
            authError: 'login error'
        }
        case 'SIGNOUT_SUCCESS':
        console.log('sign out success');
        return store;
        case 'SIGNUP_SUCCESS':
        console.log('Sign up success')
        return {
            ...store,
            authError: null
        }
        case 'SIGNUP_ERROR':
        console.log('sign up error' + action.signUpError)
        return {
            ...store,
            authError: action.signUpError
        }
        default:
        return store;

    }
}

export default authReducer;