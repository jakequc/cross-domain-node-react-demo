import { useEffect, useState } from "react";

const request = (method = "GET") => {
  return async (url, body) =>
    new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.send(body);
      xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.responseText);
        }
      };
    });
};

const baseURL = "http://localhost:8080";

const get = request("GET");
// const post = request("POST");

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    get(`${baseURL}/api/user.json`).then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <div>使用react/vue/xxx 写的 页面</div>
      <div>{data}</div>
    </div>
  );
};

export default App;
