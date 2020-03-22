

export function login(token: string, image: string) {
  return (dispatch: any) => {
    dispatch({
      type: "LOGIN",
      payload: {token, image}
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
