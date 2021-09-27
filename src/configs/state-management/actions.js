export const USER_LOGIN = "USER_LOGIN"; 
export const USER_LOGOUT = "USER_LOGOUT"; 


export function login(user){
    return {
        type: USER_LOGIN, 
        payload: {
            ...user, 
            isLogged: true, 
        }
    }
}

export function logout (user){
    return {
        type: USER_LOGOUT, 
        payload: {
            ...user, 
            isLogged: false, 
        }
    }
}
