import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
const URL_hicham = "http://www.mocky.io/v2/5d318f8733000062007ba25f";
const URl_hamid = "http://www.mocky.io/v2/5d31934d3300006b007ba286";
const UserComponent = () => {
  const [data, setData] = useState({});
  const GetUserData = url => {
    axios.get(url).then(response => {
      setData(response.data);
    });
  };
  return (
    <div>
      <button onClick={() => GetUserData(URL_hicham)}>get user 1 </button>
      <button onClick={() => GetUserData(URl_hamid)}>get user 2</button>

      {!_.isEmpty(data) && (
        <>
          <p>name : {data.name}</p>
          <p>age : {data.age}</p>
          <p>phoneNumber : {data.numberPhone}</p>
        </>
      )}
    </div>
  );
};

export default UserComponent;
