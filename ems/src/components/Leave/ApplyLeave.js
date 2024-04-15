import React,{useState} from "react";
import Footer from "../Footer";
import { Link ,useHistory} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function ApplyLeave() {
  let boxstyle={
    background: 'white',
    padding: '21px',
    borderTop: '5px solid #004dffe8',
    borderRadius: '5px',
  }
  const navigate=useHistory();
  const [formData, setFormData] = useState({
   reason:"",
   user_id:"",
   leave_startdate:"",
   leave_enddate:"",
   leave_description:"",
   leave_docx:""
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
        const response = await axios.post("https://ems-server-theta.vercel.app/applyLeave", formDataToSend);
        if (response.status === 201) {
          // Navigate to the staff list page after successful addition
          alert("Leave applied Succesfully!!! Wait for approval :-)");
          navigate.push("/manageleave");
        } else {
          alert("Error applying Leave :-(");
        }
      } catch (error) {
        // Handle error response
        if (error.response && error.response.status === 400) {
          alert(error.response.data.error); // Display the error message to the user
          alert("Error adding new leave request for duplicate value. Try again with updated Data");
        } else {
          console.error("Error adding leave request:", error);
          alert("Error adding new leave request",error);
        }
      }
    }
  
  

    // Handle form submission
    let currentUserFormData = {
    reason:formData.reason,
    leave_startdate:formData.leave_startdate,
    leave_enddate:formData.leave_enddate,
    leave_description:formData.leave_description,
    user_id:formData.user_id,
    leave_docx:formData.leave_docx,
    };
    let oldUserdata = [...user, currentUserFormData];
    setUser(oldUserdata);
    console.log(formData);

  
    // To empty the input field after adding/getting the data
    setFormData({
      reason:"",
      
      leave_description:"",
      leave_startdate:"",
      leave_enddate:"",
      user_id:"",
      leave_docx:"",
    });
  };
  
  const validateForm = () => {
    const {
     reason,
     leave_startdate,
     leave_enddate,
     leave_description,
     user_id,
     
    } = formData;
    const errors = {};

    if (!reason.trim()) {
      errors.reason = "Reason is required";
      document.getElementById("reason").focus();
    } else if (!leave_description.trim()) {
      errors.leave_description = "Description is required";
      document.getElementById("leave_description").focus();
    } else if (!leave_enddate.trim() ) {
      errors.leave_enddate = "Leave End Date is required";
      document.getElementById("leave_enddate").focus();
    } else if (!leave_startdate.trim()) {
      errors.leave_startdate = " Leave Start Date  is required";
      document.getElementById("leave_startdate").focus();
    } else if (!leave_description.trim()) {
      errors.leave_description = " Describe your Leave Reason  is required";
      document.getElementById("leave_description").focus();
    }
    else if (!user_id.trim()) {
      errors.user_id = " Your Employee ID is required";
      document.getElementById("user_id").focus();
    }
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      alert(Object.values(errors)[0]);
      return false;
    }
  };





  return (
    <>
    <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container">
          <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
            Leave
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
                  to="/leavehistory"
                >
                  My Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to='/Applyleave'>
                  Leave
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container my-2 pt-3">
          <h2>Leave Management</h2>
        </div>
        <div className="container-fluid pt-3" style={{padding:'100px'}}>
          <div className="row d-flex justify-content-evenly" style={boxstyle}>
            <h5 style={{fontSize:'20px',}} className="px-2">Apply Leave</h5>
            <hr/>
            <div className="col-sm-12 col-md-4 col-lg-5">
              
                <div className="mb-3">
                  <b>Enter Your Employee ID</b>
                  <span style={{ color: 'red' }}>*</span>
                  <input
                    type="text"
                    className="form-control"
                    id="user_id"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    placeholder="Employee ID" style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Reason</b>
                  <span style={{ color: 'red' }}>*</span>
                  <input
                    type="text"
                    className="form-control"
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    placeholder="Reason" style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Leave From</b>
                  <span style={{ color: 'red' }}>*</span>
                  <input
                    type="date"
                    className="form-control"
                    id="leave_startdate" style={{border: '1px solid'}}
                    name="leave_startdate"
                    value={formData.leave_startdate}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                </div>
              
            </div>
            <div className="col-sm-12 col-md-4 col-lg-5">
              
                <div className="mb-3">
                  <b>Leave To</b>
                  <span style={{ color: 'red' }}>*</span>
                  <input
                    type="date"
                    className="form-control"
                    id="leave_enddate"
                    name="leave_enddate"
                    value={formData.leave_enddate}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Description</b>
                  <span style={{ color: 'red' }}>*</span>
                  <textarea  
                  className="form-control" 
                  placeholder="Description" 
                  id="leave_description" 
                  name="leave_description"
                  value={formData.leave_description}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  style={{border: '1px solid'}}/>
                  
                </div>
                <div className="mb-3">
                  <b>Upload Supporting Documents (Optional, Except for Urgent Cases)</b>
                  <input
                    type="file"
                    className="form-control"
                    id="leave_docx"
                    name="leave_docx"
                    accept="png/pdf"
                   
                    onChange={handleChange}
                    
                    style={{border: '1px solid'}}
                  />
                </div>
                <button type="submit"
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
        <Footer footerstyle="fixed-bottom"/>
      </>
    
  );
}
