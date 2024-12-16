import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const LoginPengguna = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Handle user delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    console.log('Attempting to delete user with ID:', id);

    try {
      const response = await axios.delete(`http://localhost:5000/auth/users/${id}`);
      alert(response.data.message);
      fetchUsers(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting user:', error);
      alert(error.response?.data?.error || 'Failed to delete user');
    }
  };

  // Handle user edit
  const handleEdit = (user) => {
    setEditedUser({ ...user });
  };

  // Handle save after edit
  const handleSaveEdit = async () => {
    if (!editedUser) return;

    try {
      await axios.put(`http://localhost:5000/auth/users/${editedUser.id}`, {
        name: editedUser.name,
        email: editedUser.email,
        password: editedUser.password,
      });
      alert('User updated successfully');
      setEditedUser(null); // Reset the edited user
      fetchUsers(); // Refresh the users list after saving
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Registered Users</h2>

        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-8 text-left text-lg font-medium text-gray-700">ID</th>
              <th className="py-4 px-8 text-left text-lg font-medium text-gray-700">Name</th>
              <th className="py-4 px-8 text-left text-lg font-medium text-gray-700">Email</th>
              <th className="py-4 px-8 text-left text-lg font-medium text-gray-700">Password</th>
              <th className="py-4 px-8 text-left text-lg font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-lg text-gray-500">
                  No user data available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-8 text-lg text-gray-700">{user.id}</td>
                  <td className="py-4 px-8 text-lg text-gray-700">
                    {editedUser && editedUser.id === user.id ? (
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                        className="border rounded p-3 w-full text-lg"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="py-4 px-8 text-lg text-gray-700">
                    {editedUser && editedUser.id === user.id ? (
                      <input
                        type="email"
                        value={editedUser.email}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, email: e.target.value })
                        }
                        className="border rounded p-3 w-full text-lg"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="py-4 px-8 text-lg text-gray-700">
                    {editedUser && editedUser.id === user.id ? (
                      <input
                        type="text"  // Change to text to show password
                        value={editedUser.password}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, password: e.target.value })
                        }
                        className="border rounded p-3 w-full text-lg"
                      />
                    ) : (
                      user.password // Display the actual password if not editing
                    )}
                  </td>
                  <td className="py-4 px-8 text-lg">
                    <div className="flex space-x-4">
                      {editedUser && editedUser.id === user.id ? (
                        <button
                          onClick={handleSaveEdit}
                          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(user)}
                          className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPengguna;
