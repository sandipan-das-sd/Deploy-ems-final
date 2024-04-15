import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export default function EditDepartment() {
  const { id } = useParams();
  // const navigate = useHistory();

  // Define formData state
  const [formData, setFormData] = useState({
    deptid:"",
    deptname:""
  });

  // Define user state
  // const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/editDept/${id}`)
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        

        setFormData({
         deptid:userData.deptid,
         deptname:userData.deptname
        });
      })
      .catch((err) => console.error(err));
  }, [id]);


  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="blue"
        className="bi bi-pencil-square mx-2"
        viewBox="0 0 16 16"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805
                                             2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 

                                             .196-.12l6.813-6.814z"
          style={{ cursor: "pointer" }}
        />
        <path
          fillRule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>

      <div
        className="modal fade text-start"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Department
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form >
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor="departmentName"
                    className="form-label"
                    style={{ fontWeight: "500" }}
                  >
                    Department Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="departmentName"
                    name="deptname"
                    placeholder="Department Name"
                    value={formData.deptname}
                    onChange={(e) =>
                      setFormData({ ...formData, deptname: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="departmentId"
                    className="form-label"
                    style={{ fontWeight: "500" }}
                  >
                    Department Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="departmentId"
                    name="deptid"
                    placeholder="Department Id"
                    value={formData.deptid}
                    onChange={(e) =>
                      setFormData({ ...formData, deptid: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn
                  -secondary"
                  data-bs-dismiss="modal"
                  // ref={refcls}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Update Department
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


