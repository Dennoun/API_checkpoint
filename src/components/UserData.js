import React from "react";



const UserData = ({ user }) => {
  return (
    <div className="cards">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
        <p className="text-gray-700 mb-2"><span className="font-bold">Email: </span>{user.email}</p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Phone:</span> {user.phone}</p>
        <p className="text-gray-700"><span className="font-bold">Website: </span>{user.website}</p>
      </div>
    </div>
  );
};
export default UserData;
