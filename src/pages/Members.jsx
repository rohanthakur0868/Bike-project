import React, { useEffect, useState } from "react";

export default function Members() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const deleteUser = () => {

    const updatedUsers = users.filter(
      (user, index) => index !== selectedUser
    );

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-black text-white px-8 py-14">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">

        <h1 className="text-3xl font-bold text-green-500">
          Community Members
        </h1>

        <div className="text-gray-400">
          Total Members: {users.length}
        </div>

      </div>

      {/* MEMBERS GRID */}

      {users.length === 0 ? (

        <div className="text-center text-gray-400 text-lg">
          No members have joined yet.
        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {users.map((user, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition"
            >

              <h2 className="text-xl font-semibold text-green-400 mb-2">
                {user.name}
              </h2>

              <p className="text-gray-300">
                <span className="text-gray-500">Email:</span> {user.email}
              </p>

              <p className="text-gray-300">
                <span className="text-gray-500">Password:</span> {user.password}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Joined: {user.joined}
              </p>

              <button
                onClick={() => setSelectedUser(index)}
                className="mt-5 w-full bg-red-500 hover:bg-red-400 py-2 rounded-lg font-semibold transition"
              >
                Delete Member
              </button>

            </div>

          ))}

        </div>

      )}

      {/* DELETE CONFIRM POPUP */}

      {selectedUser !== null && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="bg-white text-black p-8 rounded-xl w-80 text-center">

            <h2 className="text-xl font-bold mb-4">
              Delete Member
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to remove this member?
            </p>

            <div className="flex gap-4">

              <button
                onClick={deleteUser}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
              >
                Delete
              </button>

              <button
                onClick={() => setSelectedUser(null)}
                className="flex-1 bg-gray-300 py-2 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}