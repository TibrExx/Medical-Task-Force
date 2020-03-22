

export function login(token: string, image: string, googleId: string) {
  return (dispatch: any) => {
    dispatch({
      type: "LOGIN",
      payload: {token, image, googleId}
    });
  }
}

export function logout() {
  console.log("Logging out");
  return (dispatch: any) => {
    dispatch({
      type: "LOGOUT",
      payload: ""
    });
  };
}
