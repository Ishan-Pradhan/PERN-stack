import React from "react";

const Navbar = ({ onOpen, onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={onOpen}>
          Add Clients
        </a>
      </div>
    </div>
  );
};

export default Navbar;
