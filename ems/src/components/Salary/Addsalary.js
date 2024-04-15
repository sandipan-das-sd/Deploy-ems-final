
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function AddSalary() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    basic_salary: "",
    allowance: "",
    total:""
  });
  const [errors, setErrors] = useState({});
  const navigate = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8001/staffList");
        setUsers(res.data);
      } catch (err) {
        console.log("Error fetching details", err);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (event, userId) => {
    const { name, value } = event.target;
    const updatedUsers = users.map((user) => {
      if (user._id === userId) {
        return { ...user, [name]: value };
      }
      return user;
    });
    setUsers(updatedUsers);
  
    // Update formData
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  

  const calculateTotal = (basicSalary, allowance) => {
    const total = parseInt(basicSalary) + parseInt(allowance);
    return isNaN(total) ? "" : total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:8001/addSalary", users);
        if (response.status === 201) {
          alert("Salary Added Successfully!!!");
          navigate.push('/manageSalary');
        } else {
          alert("Error adding salary details");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.error);
          alert("Error adding staffs for duplicate value. Try again with updated Data");
        } else {
          console.error("Error adding staff:", error);
        }
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    users.forEach((user) => {
      if (!user.basic_salary) {
        errors[user._id] = { ...errors[user._id], basic_salary: "Basic Salary is required" };
      }
      if (!user.allowance) {
        errors[user._id] = { ...errors[user._id], allowance: "Allowance is required" };
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(0 77 255 / 65%)" }}>
        {/* Navbar content */}
      </nav>

      <div className="container my-2">
        <h2>Salary</h2>
      </div>
      <div className="container-fluid pt-3" style={{ padding: "100px" }}>
        <div className="row d-flex justify-content-evenly">
          <div style={{ background: "white", padding: "21px", borderTop: "5px solid #004dffe8", borderRadius: "5px" }}>
            <h5 style={{ fontSize: "20px" }} className="px-2">Add Salary</h5>
            <hr />
            <div className="container">
              <div className="row">                <div className="col-md-4">                   <div className="mb-3">
                    <b className="">Department Name</b>
                    <select
                      className="form-control"
                      style={{ border: "1px solid" }}
                    >
                      <option disabled defaultValue={"--Department Name--"}>
                        --Department Name--
                      </option>
                      <option>Backend developement</option>
                      <option>Designing</option>
                      <option>Front-end developement</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container m-3">
                <div className="row p-3">
                  <table>
                    <thead>
                      <tr>
                        <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">Staff</th>
                        <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">Basic Salary($)</th>
                        <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">Allowance($)</th>
                        <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">Total($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td className="col-md-3 bg- p-1 px-2 tablestyle">{user.user_name}</td>
                          <td className="col-md-3 bg- p-1 px-2 tablestyle">
                            <input
                              type="text"
                              name="basic_salary"
                              value={formData.basic_salary}
                              id="basic_salary"
                              placeholder="Enter Basic Amount (Number only)"
                              onChange={(e) => handleChange(e, user._id)}
                              
                              style={{ width: "100%" }}
                            />
                            {errors[user._id]?.basic_salary && <div className="text-danger">{errors[user._id].basic_salary}</div>}
                          </td>
                          <td className="col-md-3 bg- p-1 px-2 tablestyle">
                            <input
                              type="text"
                              id="allowance"
                              name="allowance"
                              value={formData.allowance}
                              onChange={(e) => handleChange(e, user._id)}
                              placeholder="Enter Allowance  Amount (Number only)"
                              style={{ width: "100%" }}
                            />
                            {errors[user._id]?.allowance && <div className="text-danger">{errors[user._id].allowance}</div>}
                          </td>
                          <td className="col-md-3 bg- p-1 px-2 tablestyle">
                            <input
                              type="text"
                              id="total"
                              name="total"
                              value={calculateTotal(user.basic_salary, user.allowance)}
                              readOnly
                              style={{ width: "100%" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="container">
                <button
                  type="submit"
                  className="btn btn-success float-end"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer footerstyle="fixed-bottom" />
    </>
  );
}
