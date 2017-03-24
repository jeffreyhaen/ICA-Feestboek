export const onUserLogin = (user) => {
    return {
        type: "ON_USER_LOGIN",
        payload: { user: user},
    }
}

export const onUserLogout = (user) => {
    return {
        type: "ON_USER_LOGOUT",
        payload: {user: user},
    }
}