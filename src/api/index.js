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

export async function fetchFromAPI(method, path, params) {
  const url = `${process.env.REACT_APP_API_URL}${path}`;

  await axios({
    method,
    url,
    data: JSON.stringify(params)
  })
    .then(function(rsp) {
      console.log("✅", rsp);
      // return Promise.resolve(rsp);
      return rsp;
    })
    .catch(function(error) {
      console.log("🤷‍♂️", error);
      // return Promise.reject(error);
      return error;
    });
}
