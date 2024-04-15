import React from "react";
import "./managesalary.css";
import Footer from "../Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Managesalary() {
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
    height: "auto",
  };
  
  return (
    <>
      <div style={{minHeight:'100%'}}>
      <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container">
          <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
            Salary
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
                  to="/addsalary"
                >
                  Add Salary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to='/managesalary'>
                  Manage Salary
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container my-2 pt-3">
          <h2>Salary Management</h2>
        </div>
        <div className="container mt-3" style={boxstyle}>
          <h4>View Salary</h4>
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
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="col-1 bg- p-1 px-2  text-center tablestyle">
                      #
                    </th>
                    <th className="col bg- p-1 px-2  tablestyle">Staff Name</th>
                    <th className="col bg- p-1 px-2  tablestyle">Departmant</th>
                    <th className="col bg- p-1 px-2  tablestyle">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-1 bg- p-1 px-2  text-center" style={{borderLeft:'1px solid rgba(0, 0, 0, 0.331)'}}>
                      1
                    </td>
                    <td className="col bg- p-1 px-2 " style={{borderLeft:'1px solid rgba(0, 0, 0, 0.331)'}}>Mr. hisernBerg</td>
                    <td className="col bg- p-1 px-2 " style={{borderLeft:'1px solid rgba(0, 0, 0, 0.331)'}}>Backend Developement</td>
                    <td className="col bg- p-1 px-2 " style={{borderLeft:'1px solid rgba(0, 0, 0, 0.331)'}}>$2.5M</td>
                    
                  </tr>
                  
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

      <Footer footerstyle="fixed-bottom" />
    </>
  );
}
