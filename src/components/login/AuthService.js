import { fetchFromAPI } from "../../api";

export default class AuthService {
  login = (email, password) => {
    return fetchFromAPI("POST", "login", {
      email,
      password
    });
  };

  loggedIn() {
    return false;
  }

  sayHi() {
    return "hihi";
  }
}
