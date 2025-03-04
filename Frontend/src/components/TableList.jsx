import React, { useEffect, useState } from "react";
import axios from "axios";
import { progressEventReducer } from "./../../node_modules/axios/lib/helpers/progressEventReducer";

const TableList = ({ handleOpen, searchTerm }) => {
  const [tabledata, setTabledata] = useState([]);
  const [error, setError] = useState(null);
  console.log(searchTerm);
  console.log("table data is", tabledata);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/clients");
        setTabledata(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const filteredData = tabledata.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/clients/${id}`
      );
      setTabledata((prevData) => prevData.filter((client) => client.id !== id));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("filtered data is : ", filteredData);
  return (
    <>
      {error && <div className="alert alert-error">{error} </div>}{" "}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {filteredData.map((client, index) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full ${
                      client.isactive
                        ? "btn-Primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}{" "}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit", client)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-accent"
                    onClick={() => handleDelete(client.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
