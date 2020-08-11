import axios from "axios";

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
  })
    // Can handle 401's here
    // remove any old cookies, redirect to /login
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
