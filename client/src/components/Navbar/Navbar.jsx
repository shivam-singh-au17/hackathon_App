import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import AddPartner from "../Partner/AddPartner";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [addTask, setAddTask] = useState([]);

  function getMyTodos() {
    axios.get(`http://localhost:5000/company`).then((res) => {
      setAddTask(res.data);
    });
  }

  useEffect(() => {
    getMyTodos();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fs-5 boxShadow"
        style={{ backgroundColor: "#FF5151" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            <img src={logo} alt="" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span
                  className="nav-link active"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  BecomePartners
                </span>
                <AddPartner />
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to={`/`}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OurPartners
                </Link>
                <ul
                  className="dropdown-menu fs-5"
                  style={{ backgroundColor: "#FFFFFF" }}
                  aria-labelledby="navbarDropdown"
                >
                  {addTask.map((name) => {
                    return (
                      <li key={name._id}>
                        <Link className="dropdown-item" to={`/`}>
                          {name.company_name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
