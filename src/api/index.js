import axios from "axios";

// Good error handling tips here:
// https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/

export class APIError {
  constructor({ data, status, statusText }) {
    this.data = data;
    this.status = status;
    this.statusText = statusText;
  }
}

// Can use the Github openAPI to test:
// "https://api.github.com/users/nazwhale/repos"
export async function getReposPromise() {
  const apiUrl = `${process.env.REACT_APP_API_URL}/repos`;

  return axios
    .get(apiUrl)
    .then(res => res.data)
    .catch(err => console.error(err));
}

export function fetchFromAPI(method, path, params) {
  const url = `${process.env.REACT_APP_API_URL}${path}`;

  // axios returns a Promise
  //
  return axios({
    method,
    url,
    data: JSON.stringify(params)
  }).catch(error => {
    // Handle unauthenticated request
    // remove any old cookies, redirect to /login
    if (error.response != null && error.response.status === 401) {
      console.log("To be redirected and cookie-cleaned...");
    }

    throw error;
  });

  // Can handle 401's here
  //
  // .catch(error) {
  //
  //   if (err === 401) {
  //     // redirect
  //     console.log("🔒", user not authenticated, redirecting);
  //   }
  //
  //    // persist the error for downstream code to handle
  //    throw error
  // });
}
