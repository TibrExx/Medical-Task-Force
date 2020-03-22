const authReducer = (state = {
    user: '',
    image: '',
    isAuthenticated: false,
    googleId: ''
}, action: any) => {
    switch (action.type) {
        case "LOGIN":
            state = {
                ...state,
                user: action.payload.token,
                image: action.payload.image,
                isAuthenticated: true,
                googleId: action.payload.googleId
            };
            break;
        case "LOGOUT":
            state = {...state, user: '', isAuthenticated: false};
            break;
        default:
            break;
    }
    return state;
};

export default authReducer;
