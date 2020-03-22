import jwt from 'jsonwebtoken';

export function UserIsValid(token: any) {
  console.log("the token is " + token.user);
  if (token.isAuthenticated) {
    const decodedToken = jwt.decode(token.user);
    const dateNow = new Date();
    console.log(decodedToken);
    /*
    if (decodedToken && decodedToken.exp > dateNow.getTime() / 1000) return true;
    else return false;
     */
    return true;
  }
  return false;
}
