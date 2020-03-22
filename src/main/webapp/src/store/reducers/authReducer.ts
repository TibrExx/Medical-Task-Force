
const authReducer = (state = {
  user: '',
  image: '',
  isAuthenticated: false
}, action: any) => {
  switch (action.type) {
    case "LOGIN":
      state = { ...state, user: action.payload.token, image: action.payload.image, isAuthenticated: true };
      break;
    case "LOGOUT":
      state = { ...state, user: '', isAuthenticated: false };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
