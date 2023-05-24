import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination";

const UserPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setmodalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    //formData will contain the dob in string, backend will convert it to date also contains the sex in integer
    id: "",
    name: "",
    sex: 0,
    dob: "",
    createTime: "",
    administrator: "",
  });
  const [filterData, setFilterData] = useState({
    name: "",
    sex: 2,
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const tokenFromQuery = router.query.token;
    if (tokenFromQuery) {
      setToken(tokenFromQuery.toString());
    }
    fetchUsers();
  }, [router.query.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const fetchUsers = async () => {
    try {
      const page = 1; // The desired page number
      const url = `http://localhost:8080/user/getPage?page=${page}`;
      const response = await axios.get(url);
      const responseObject = response.data;
      setUsers(responseObject.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDetailed = (user) => {
    setSelectedUser(user);
    setmodalOpen(true);
  };

  const convertToAge = (dob) => {
    const dateOfBirth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    if (
      today.getMonth() < dateOfBirth.getMonth() ||
      (today.getMonth() === dateOfBirth.getMonth() &&
        today.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const convertTime = (date) => {
    const createTime = new Date(date);
    const formattedDate = createTime.toLocaleDateString("en-US");
    const formattedTime = createTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const formattedCreateTime = `${formattedDate} ${formattedTime}`;
    return formattedCreateTime;
  };
  //this is to open the edit modal
  const handleEdit = (user) => {
    // Handle edit action here
    setFormData({
      id: user.id,
      name: user.name,
      sex: user.sex,
      dob: user.dob,
      createTime: user.createTime,
      administrator: user.administrator,
    });
    // setEditUser(user);
    setEditModalOpen(true);
    console.log(
      `Edit clicked for user with ID: ${user.id}, ${user.administrator}`
    );
  };

  /*This is after clicking the submit button */
  const handleEditSubmit = async (e) => {
    try {
      const url = "http://localhost:8080/user/update";
      const response = await axios.put(url, {
        id: formData.id,
        name: formData.name,
        dob: new Date(formData.dob),
        sex: formData.sex,
        createTime: new Date(formData.createTime),
        administrator: formData.administrator,
        token: token,
      });
      if (response.data.code == 401) {
        window.alert("User not authorized");
      } else {
        const pageNumber = page; // The desired page number
        const url = `http://localhost:8080/user/getPage?page=${pageNumber}`;
        const updatedUserList = await axios.get(url);
        setUsers(updatedUserList.data.data.list);
      }
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const url = "http://localhost:8080/user/delete";
      const requestBody = { id: userId, token: token };
      const response = await axios.delete(url, { data: requestBody });
      console.log(response.data);
      if (response.data.code == 401) {
        window.alert("User not authorized");
      } else {
        const pageNumber = page; // The desired page number
        const url = `http://localhost:8080/user/getPage?page=${pageNumber}`;
        const updatedUserList = await axios.get(url);
        setUsers(updatedUserList.data.data.list);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Page</h1>
      <Filter
        filterData={filterData}
        setFilterData={setFilterData}
        setUsers={setUsers}
      />
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b py-2 px-4 bg-gray-200">ID</th>
            <th className="border-b py-2 px-4 bg-gray-200">Name</th>
            <th className="border-b py-2 px-4 bg-gray-200">Sex</th>
            <th className="border-b py-2 px-4 bg-gray-200">Age</th>
            <th className="border-b py-2 px-4 bg-gray-200">Create Time</th>
            <th className="border-b py-2 px-4 bg-gray-200">Administrator</th>
            <th className="border-b py-2 px-4 bg-gray-200">Operate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b py-2 px-4">{user.id}</td>
              <td className="border-b py-2 px-4">{user.name}</td>
              <td className="border-b py-2 px-4">
                {user.sex == 1 ? "male" : "female"}
              </td>
              <td className="border-b py-2 px-4">{convertToAge(user.dob)}</td>
              <td className="border-b py-2 px-4">
                {convertTime(user.createTime)}
              </td>
              <td className="border-b py-2 px-4">
                {user.administrator ? "Yes" : "No"}
              </td>
              <td className="border-b py-2 px-4">
                <button
                  className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none"
                  onClick={() => handleDetailed(user)}
                >
                  Detailed
                </button>
                <button
                  className="mr-2 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded focus:outline-none"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Details modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-800 opacity-70"
            onClick={() => setmodalOpen(false)}
          ></div>
          <div className="bg-white w-96 rounded-lg p-4 absolute">
            {/* Remove the "bg-white" class to remove the gray background */}
            <h2 className="text-lg font-bold mb-2">User Details</h2>
            <p>ID: {selectedUser.id}</p>
            <p>Name: {selectedUser.name}</p>
            <p>Sex: {selectedUser.sex == 1 ? "male" : "female"}</p>
            <p>Age: {convertToAge(selectedUser.dob)}</p>
            <p>Create Time: {selectedUser.createTime}</p>
            <p>Administrator: {selectedUser.administrator ? "Yes" : "No"}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none"
              onClick={() => setmodalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* edit modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-800 opacity-70"
            onClick={() => setEditModalOpen(false)}
          ></div>
          <div className="bg-white w-96 rounded-lg p-4 absolute">
            <h2 className="text-lg font-bold mb-2">User Details</h2>
            <label className="block mb-2">
              ID:
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.id}
                name="id"
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </label>
            <label className="block mb-2">
              Sex:
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.sex}
                onChange={handleChange}
                name="sex"
              >
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </label>
            <label className="block mb-2">
              Date of Birth:
              <input
                type="date"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
              />
            </label>

            <label className="block mb-2">
              Create Time:
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.createTime}
                onChange={handleChange}
                name="createTime"
              />
            </label>
            <label className="block mb-2">
              Administrator:
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.administrator}
                onChange={handleChange}
                name="administrator"
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </label>

            <div className="flex items-center justify-center gap-2">
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none"
                onClick={() => setEditModalOpen(false)}
              >
                Close
              </button>
              <button
                className="mt-4 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded focus:outline-none"
                onClick={() => handleEditSubmit()}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      )}
      <Pagination setUsers={setUsers} setPage={setPage} page={page} />
    </div>
  );
};

export default UserPage;
