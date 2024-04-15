import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2pdf from "html2pdf.js";

export default function ViewDepartment() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ems-server-theta.vercel.app/editDept/${id}`)
      .then((response) => {
        setDepartment(response.data); // Assuming response.data contains the department details
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.getElementById("printable-content");
    html2pdf().from(element).save("department_details.pdf");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}  id="printable-content"
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
       // Add id to the div containing printable content
      >
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Department Name:
          </h2>
          <p style={{ fontSize: "18px" }}>{department.deptName}</p>
        </div>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Department Id:
          </h2>
          <p style={{ fontSize: "18px" }}>{department.deptID}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
            onClick={handlePrint}
          >
            Print
          </button>
          <button className="btn btn-success" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
