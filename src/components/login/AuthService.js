import { fetchFromAPI } from "../../api";

export default class AuthService {
  login = (email, password) => {
    return fetchFromAPI("POST", "login", {
      email,
      password
    });
    // .then(response => {
    //   console.log("rrr", response);
    //   // return Promise.resolve(response);
    // })
    // .catch(error => {
    //   console.log("eee", error);
    //   // return error;
    // });
  };

  loggedIn() {
    return false;
  }

  sayHi() {
    return "hihi";
  }
}
