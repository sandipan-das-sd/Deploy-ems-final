import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ManageDepartment.css";
// import EditDepartment from "./EditDepartment";
// import ViewDepartment from "./ViewDepartment";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function ManageDepartment() {
  // const tableStyle = {
  //   background: "linear-gradient(135deg, #2980b9, #6dd5fa)", // Gradient background
  //   color: "#fff", // Text color
  // };

  const navigate = useHistory();

  const loaderStyle = {
    width: "60px",
    aspectRatio: "2",
    background:
      "no-repeat radial-gradient(circle closest-side, #000 90%, #0000)",
    backgroundSize: "calc(100%/3) 50%",
    animation: "l3 1s infinite linear",
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Maintain authentication state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/manageDepartment"
        );
        setUser(response.data);
        // setIsAuthenticated(true); // Set isAuthenticated to true when data is fetched successfully
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");

    if (confirmed) {
      axios
        .delete("http://localhost:8001/deletedept/" + id)
        .then((res) => {
          console.log(res);
          alert("Record Deleted successfully");
          //  window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
    height: "auto",
  };
  // const {editnote}=props
  return (
    <div className="" style={{ minHeight: "100%" }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container">
          <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
            Department
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to="/">
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="currentColor"
                      className="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                  </span>
                  Home
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color:'white' }}
                  to="/addDepartment"
                >
                  Add Department
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to='/managedepartment'>
                  Department
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div style={loaderStyle}>Loading...</div>
      ) : user.length === 0 ? (
        <p>No data available. Add data to see the Department list.</p>
      ) : (
        <div>
          <div className="container my-2 pt-3">
            <h2>Manage Departments</h2>
          </div>
          <div className="container mt-3" style={boxstyle}>
            <h4>View Departments</h4>
            <br />
            Show
            <select className="p-2 m-1 px-3">
              <option value={1} id="num1">
                1
              </option>
              <option value={2} id="num2">
                2
              </option>
              <option value={3} id="num3">
                3
              </option>
              <option value={4} id="num4">
                4
              </option>
              <option value={5} id="num5">
                5
              </option>
              <option value={6} id="num6">
                6
              </option>
              <option value={7} id="num7">
                7
              </option>
              <option value={8} id="num8">
                8
              </option>
              <option value={9} id="num9">
                9
              </option>
              <option value={10} id="num10">
                10
              </option>
            </select>
            entries
            <form class="d-flex float-end">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search.."
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
            <div className="container m-2">
              <div className="row">
                <table className="table table-striped">
                  <thead>
                    <tr className="tablestyle2">
                      <th className="col-1 bg- p-1 px-2 text-center ">#</th>
                      <th className="col bg- p-1 px-2 ">Department Name</th>
                      <th className="col bg- p-1 px-2 ">Department Id</th>
                      <th className="col bg- p-1 px-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((userData, index) => (
                      <tr key={userData._id} id="text" className="tablestyle1">
                        <td
                          className="col-1 bg- p-1 px-2  text-center my-5 "
                          style={{ height: "47px" }}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 "
                          style={{ height: "47px" }}
                        >
                          {userData.deptName}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 "
                          style={{ height: "47px" }}
                        >
                          {userData.deptID}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 text-center"
                          style={{ height: "47px" }}
                          
                        >
                          {/* Update button */}
                          <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square "
                        viewBox="0 0 16 16"
                        onClick={() => navigate.push(`/editDept/${userData._id}`)}
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805
                          2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 

                        .196-.12l6.813-6.814z"
                          style={{ cursor: "pointer" }}
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>


                          {/* Delete Button */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="red"
                            className="bi bi-trash3mx-2"
                            viewBox="0 0 16 16"
                            onClick={() => handleDelete(userData._id)}
                          >
                            <path
                              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 
                                            1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1
                                            1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5
                                             8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 
                                             .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                              style={{ cursor: "pointer" }}
                            />
                          </svg>
                          {/* View details button */}
                          <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path
                          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => navigate.push(`/viewDept/${userData._id}`)}
                        />
                      </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="container m-2"
              style={{ background: "white", height: "25px" }}
            >
              <p className="float-start my-2">Showing 1 to2 of 2 entries</p>
              <div
                class="btn-group float-end my-2"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" class="btn btn-outline-primary">
                  &#11164;
                </button>
                <button type="button" class="btn btn-outline-primary active">
                  1
                </button>
                <button type="button" class="btn btn-outline-primary">
                  &#11166;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer footerstyle="fixed-bottom"/>
    </div>
  );
}