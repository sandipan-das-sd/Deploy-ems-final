import React, { useState, useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";
import axios from "axios";

const Dashboard = () => {
  const [staffCount, setStaffCount] = useState(0);
  const [deptCount, setDeptCount] = useState(0);
  const [leaveRequest, setLeaveRequest] = useState(0)
  useEffect(() => {
    fetchDashboardCount();
  }, []);

  const fetchDashboardCount = async () => {
    try {
      const response = await axios.get("http://localhost:8001/dashboardCount");
      console.log(response.data);
      setStaffCount(response.data.staffcount); 
      setDeptCount(response.data.deptcount); 
      setLeaveRequest(response.data.leaveRequestCount);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  return (
    <>
      <div className="container p-3 text-c">
        <span style={{ fontSize: "2em", fontWeight: "600" }}>Dashboard </span>
        <span style={{ fontSize: "1em" }}>Control panel</span>
      </div>
      <hr
        style={{
          position: "relative",
          bottom: "29px",
        }}
      />
      <div className="container my-2">
        <div className="row" style={{ transform: "translateY(-19px)" }}>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number={deptCount} 
              category="Department"
              cardbgcolor="blue"
              pageLink="/manageDepartment"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number={staffCount} 
              category="Staff"
              cardbgcolor="rgb(88 13 51)"
              pageLink="/manageStaff"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number={leaveRequest} 
              category="Leave Requests"
              cardbgcolor="#c70d0d"
              pageLink="/leavehistory"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              number="$39640" 
              category="Salary Paid"
              cardbgcolor="green"
              pageLink="/managesalary"
            />
          </div>
        </div>
      </div>
      <Footer footerstyle="fixed-bottom" />
    </>
  );
};

export default Dashboard;