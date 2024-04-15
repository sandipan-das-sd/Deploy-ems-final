
import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function AddStaff() {
const navigate =useHistory()
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    
    user_sex: "",
    
    user_address: "",
    user_zip: "",
    user_city: "",
    user_state: "",
    user_district: "",
    user_phone: "",
    user_birthday: "",
    user_docx: "",
    user_department: "",
    user_workingtype: "",
    user_doj: "",
    user_emergencyphneno: "",
    
    index: "",
  });
  
  //handelChange is Link function where user can type the value and we can get the value of all the input fields
  //on chnage and event are adding for this  here to type
  let [user, setUser] = useState([]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? event.target.files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      try {
        // API call to add staff member
        const response = await axios.post("http://localhost:8001/addStaff", formDataToSend);
        if (response.status === 201) {
          // Navigate to the staff list page after successful addition
          alert("Data Successfully added");
          navigate.push("/staffList");
        } else {
          alert("Error adding staff member");
        }
      } catch (error) {
        // Handle error response
        if (error.response && error.response.status === 400) {
          alert(error.response.data.error); // Display the error message to the user
          alert("Error adding staffs for duplicate value. Try again with updated Data");
        } else {
          console.error("Error adding staff:", error);
        }
      }
    }
  
  

    // Handle form submission
    let currentUserFormData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_sex: formData.user_sex,
     

      

      user_address: formData.user_address,
      user_zip: formData.user_zip,
      user_city: formData.user_city,
      user_state: formData.user_state,
      user_district: formData.user_district,
      user_phone: formData.user_phone,
      user_birthday: formData.user_birthday,
      user_docx: formData.user_docx,
      user_department: formData.user_department,
      user_workingtype: formData.user_workingtype,
      user_doj: formData.user_doj,
      user_emergencyphneno: formData.user_emergencyphneno,
      index: formData.index,
    };
    let oldUserdata = [...user, currentUserFormData];
    setUser(oldUserdata);
    console.log(formData);
    
    // To empty the input field after adding/getting the data
    setFormData({
      user_name: "",
      user_email: "",
      user_sex: "",
      user_address: "",
      user_zip: "",
      user_city: "",
      user_state: "",
      user_district: "",
      user_phone: "",
      user_birthday: "",
      user_docx: "",
      user_department: "",
      user_workingtype: "",
      user_doj: "",
      user_emergencyphneno: "",
      index: "",
    });
  };
  
  const validateForm = () => {
    const {
      user_name,
      user_email,
      user_phone,
      user_birthday,
      user_zip,
      user_district,
      user_docx
    } = formData;
    const errors = {};

    if (!user_name.trim()) {
      errors.user_name = "Name is required";
      document.getElementById("name").focus();
    } else if (!user_email.trim()) {
      errors.user_email = "Email is required";
      document.getElementById("email").focus();
    } else if (!user_phone.trim() || user_phone.length !== 10) {
      errors.user_phone = "Enter Link valid 10-digit phone number";
      document.getElementById("phone").focus();
    } else if (!user_birthday.trim()) {
      errors.user_birthday = "Date of Birth is required";
      document.getElementById("birthday").focus();
    } else if (!user_zip.trim()) {
      errors.user_zip = "Pincode is required";
      document.getElementById("zip").focus();
    } else if (!user_district.trim()) {
      errors.user_district = "District is required";
      document.getElementById("district").focus();
    }
    else if (user_docx && user_docx.size > 150 * 1024) {
      errors.user_docx = "File size should be less than or equal to 150KB";
      document.getElementById('user_docx').focus();
    } else if (!user_docx) {
      errors.user_docx = "Please upload your photo here. The photo size must be less than or equals to 150KB";
      document.getElementById('user_docx').focus();
    }

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      alert(Object.values(errors)[0]);
      return false;
    }
  };

  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)",color:"white"}}
      >
        <div className="container">
          <Link className="navbar-brand" to="/" style={{fontSize:"25px",color:"white",letterSpacing:".05125em"}}>
            Staff
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
                <Link className="nav-link" to="/" style={{color:"white"}}>
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="white"
                      className="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path>
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
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/manageStaff"
                  style={{color:"white"}}
                >
                  Staff-List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:"white"}} to="/addStaff">
                  Staff
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-2 pt-3">
        <h2>Staff Management</h2>
      </div>
      <div className="container-fluid pt-3" style={{ padding: "100px" }}>
        <div className="row d-flex justify-content-evenly" style={boxstyle}>
          <h5 style={{ fontSize: "20px" }} className="px-2">
            Add Staff
          </h5>
          <hr />
          {/* part1 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Full Name</b>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="Full Name"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Department</b>

              <select
                className="form-control"
                id="department"
                name="user_department"
                value={formData.user_department}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Department----
                </option>
                <option value="FullTime">CSE1</option>
                <option value="PartTime">CSE2</option>
                <option value="Remote">CSE3</option>
                <option value="Hybrid">CSE4</option>
              </select>
            </div>
          </div>
          {/* part2 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Gender</b>

              <select
                className="form-control"
                id="sex"
                name="user_sex"
                value={formData.user_sex}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Gender----
                </option>
                <option value="FullTime">Male</option>
                <option value="PartTime">Female</option>
                <option value="Remote">Others</option>
              </select>
            </div>
            <div className="mb-3">
              <b>Email</b>
              <input
                className="form-control"
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="name@example.com"
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part3 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Mobile</b>
              <input
                className="form-control"
                type="number"
                id="phone"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="10 Digit mobile number"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Photo</b>
              <input
                className="form-control"
                type="file"
                accept="image/png/jpg/jpeg"
                id="user_docx"
                name="user_docx"
               
                onChange={handleChange}
                
                style={{ border: "1px solid" }}
                required
              />
            </div>
          </div>
          {/* part4 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Date of Birth</b>
              <input
                className="form-control"
                type="date"
                id="birthday"
                name="user_birthday"
                value={formData.user_birthday}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="Reason"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Date of Joining</b>
              <input
                type="date"
                className="form-control"
                id="doj"
                name="user_doj"
                value={formData.user_doj}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part5 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>City</b>
              <input
                type="text"
                className="form-control"
                id="city"
                name="user_city"
                value={formData.user_city}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="City"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>State</b>
              <input
                type="text"
                className="form-control"
                id="state"
                name="user_state"
                value={formData.user_state}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="State"
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part6 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>District</b>
              <input
                type="text"
                className="form-control"
                id="district"
                name="user_district"
                value={formData.user_district}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="District"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Address</b>
              <input
                type="text"
                className="form-control"
                id="address"
                name="user_address"
                value={formData.user_address}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part8 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>PinCode</b>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="user_zip"
                placeholder="Pincode"
                value={formData.user_zip}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Optional mobile Number</b>
              <input
                type="tel"
                className="form-control"
                id="emergencyphoneno"
                name="user_emergencyphneno"
                value={formData.user_emergencyphneno}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part7 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Working Type</b>

              <select
                id="workingtype"
                className="form-control"
                name="user_workingtype"
                value={formData.user_workingtype}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Working Type----
                </option>
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-11  ">
            <button
              type="submit"
              className="btn btn-primary float-end"
              id="applyleave"
              onClick={handleSubmit}
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer footerstyle="fixed-bottom" />
    </>
  );
}