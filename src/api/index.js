import axios from "axios";

// TODO: figure out how to handle onSuccess / onFailure
export async function getReposPromise() {
  const apiUrl = `${process.env.REACT_APP_API_URL}/repos`;

  return axios
    .get(apiUrl)
    .then(res => res.data)
    .catch(err => console.error(err));
}

export function makeAuthedReq(method, path, params, authTokenId) {
  const apiUrl = `${process.env.REACT_APP_API_URL}${path}`;

  axios
    .method(apiUrl, {
      params,
      headers: { Authorization: authTokenId }
    })
    .then(function(rsp) {
      console.log("✅", rsp);
    })
    .catch(function(error) {
      console.log("🤷‍♂️", error);
    });
}

export function fetchFromAPI(method, path, params, authTokenId) {
  const apiUrl = `${process.env.REACT_APP_API_URL}${path}`;

  return axios
    .get(apiUrl)
    .then(res => res.data)
    .catch(err => console.error(err));
}
