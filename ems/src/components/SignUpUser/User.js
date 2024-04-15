import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the stored email
    const userEmail = localStorage.getItem('userEmail');
    axios.get(`https://deploy-ems-final.onrender.com/staffList?user_email=${userEmail}`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          // If user data is found, set it in state
          setUserData(response.data[0]);
        } else {
          console.log('User data not found');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to User profile</h1>
      {userData ? (
        <p>Welcome, {userData.user_name}</p>
      ) : (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          No Staff Member Found in our Company.
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ml-10>
            See Reason
          </button>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Reason</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Please use your email ID provided during registration to access the your account. If you are not a staff member, this feature is not intended for you.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
