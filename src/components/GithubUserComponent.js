import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";

const GithubUserComponent = () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("");
  const API_GITHUB = "https://api.github.com/users/";

  const handleChange = e => {
    console.log(e.target.value);
    setUrl(API_GITHUB + e.target.value);
  };

  const GetUserData = url => {
    console.log("ok now is : ", url);
    axios.get(url).then(response => {
      setData(response.data);
    });
    //console.log("then is ", API_GITHUB);
  };
  return (
    <div>
      <input onChange={e => handleChange(e)} />
      <button onClick={() => GetUserData(url)}>github </button>
      <p>{url}</p>
      {!_.isEmpty(data) && (
        <>
          <p>login : {data.login}</p>
          <p>name : {data.name}</p>
          <p>url : {data.url}</p>
          <p>public_repos:{data.public_repos}</p>
          <p>bio : {data.bio}</p>
        </>
      )}
    </div>
  );
};

export default GithubUserComponent;
