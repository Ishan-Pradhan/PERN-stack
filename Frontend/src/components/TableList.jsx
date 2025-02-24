import React from "react";

const clients = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    job: "superman",
    rate: "100",
    isActive: true,
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    job: "villan",
    rate: "50",
    isActive: true,
  },
  {
    name: "Johnny Depp",
    email: "john@gmail.com",
    job: "superman",
    rate: "500",
    isActive: false,
  },
];

const TableList = ({ handleOpen }) => {
  return (
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
          {clients.map((client, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <button
                  className={`btn rounded-full ${
                    client.isActive ? "btn-Primary" : "btn-outline btn-primary"
                  }`}
                >
                  {client.isActive ? "Active" : "Inactive"}{" "}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleOpen("edit")}
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-accent">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
