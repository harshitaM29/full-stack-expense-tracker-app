import { authActions } from "./auth";

export const setTokenId = (user) => {
    
    return (dispatch) => {

        localStorage.setItem('token', user.token)
        dispatch(authActions.login(user))
    }
}