import { useState } from "react";

const request = (method = "GET") => {
  return async (url, body) =>
    new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.send(body);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText);
        }
      };
    });
};

// const baseURL = "http://127.0.0.1:8080";
const baseURL = "http://localhost:8080";

const get = request("GET");
const post = request("POST");

const App = () => {
  const [data, setData] = useState();
  const [method, setMethod] = useState("get");

  const getRequest = () => {
    setMethod("get");
    get(`${baseURL}/api/get`).then((res) => setData(res));
  };

  const postRequest = () => {
    setMethod("post");
    post(`${baseURL}/api/post`).then((res) => setData(res));
  };

  return (
    <div className="App">
      <button onClick={getRequest}>get request</button>
      <br />
      <br />
      <button onClick={postRequest}>postRequest</button>

      <div>
        <br />
        {method} : {data}
      </div>
    </div>
  );
};

export default App;
