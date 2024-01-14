import React, { useState, useEffect } from "react";
import axios from "axios";
import UserData from "./UserData";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((Res) => {
      setUsers(Res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center gap-4">
        {users.map((user) => (
          <div key={user.id}>
            <UserData user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;
