import React, { useState, useEffect } from "react";
import axios from "axios";

const item = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const url = `http://localhost:8080/user/getItemStats`;
      const responseObject = await axios.get(url);
      console.log(responseObject.data.data);
      setItems(responseObject.data.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Item table</h1>
      <table className="min-w-full border border-gray-300 table-fixed">
        <thead>
          <tr>
            <th className="border-b py-2 px-4 bg-gray-200">Age</th>
            <th className="border-b py-2 px-4 bg-gray-200">Item Category</th>
            <th className="border-b py-2 px-4 bg-gray-200">Count</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border-b py-2 px-4 text-center">{item.age}</td>
              <td className="border-b py-2 px-4 text-center">
                {item.itemCategory}
              </td>
              <td className="border-b py-2 px-4 text-center">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default item;
