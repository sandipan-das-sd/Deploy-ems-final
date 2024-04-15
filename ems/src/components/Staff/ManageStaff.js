import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ManageStaff() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to format ISO date to MM/DD/YYYY format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8001/editStaff/${id}`)
      .then((response) => {
        setUser(response.data); // Assuming response.data contains the user details
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        {user.user_docx && (
          <img
            src={user.user_docx}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
            alt="UserImage"
          />
        )}
        {!user.user_docx && (
          <div>
            User Image Not Available in the server.Please try again after
            sometime.
          </div>
        )}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Details of Staffs
        </div>
        <div>
          <div>
            <strong>User Name:</strong> {user.user_name}
          </div>
          <div>
            <strong>User Email:</strong> {user.user_email}
          </div>
          <div>
            <strong>User Age:</strong> {user.user_age}
          </div>
          <div>
            <strong>User Sex:</strong> {user.user_sex}
          </div>
          <div>
            <strong>User Job Title:</strong> {user.user_jobtitle}
          </div>
          <div>
            <strong>User Address:</strong> {user.user_address}
          </div>
          <div>
            <strong>User Zip:</strong> {user.user_zip}
          </div>
          <div>
            <strong>User City:</strong> {user.user_city}
          </div>
          <div>
            <strong>User State:</strong> {user.user_state}
          </div>
          <div>
            <strong>User District:</strong> {user.user_district}
          </div>
          <div>
            <strong>User Phone:</strong> {user.user_phone}
          </div>
          <div>
            <strong>User Birthday:</strong> {formatDate(user.user_birthday)}
          </div>
          <div>
            <strong>User Department:</strong> {user.user_department}
          </div>
          <div>
            <strong>User Working Type:</strong> {user.user_workingtype}
          </div>
          <div>
            <strong>User Date of Joining:</strong> {formatDate(user.user_doj)}
          </div>
          <div>
            <strong>User Emergency Phone Number:</strong>{" "}
            {user.user_emergencyphneno}
          </div>
          <div>
            <strong>User Emergency Contact Name:</strong>{" "}
            {user.user_emergency_contact_name}
          </div>
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={() => window.print()}
        style={{ marginBottom: "20px" }}
      >
        Print Your Info
      </button>
    </div>
  );
}
