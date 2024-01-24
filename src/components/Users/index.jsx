import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {users.map((users) => {
        return <p key={users.id}>{users.name}</p>;
      })}
    </div>
  );
};

export default Users;
