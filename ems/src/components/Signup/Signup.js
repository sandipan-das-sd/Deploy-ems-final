import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

const Signup = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "user",
        secretKey: "", 
    });
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Password validation, additional validations can be added
        if (data.password !== data.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        
        if (data.userType === "admin") {
            const secretKey = "ems-ardent@2024";
            if (data.secretKey !== secretKey) {
                setError("Secret key does not match");
                return;
            }
        }

        axios.defaults.withCredentials=true;
        try {
            // Include userType in the data object sent to the backend
            const response = await axios.post('https://server-ems-seven.vercel.app//register', data);
            console.log(response.data);
            alert("Registered successfully");
            history.push('/login');
        } catch (error) {
            console.error("Error:", error.message);
            setError("Registration failed. Please try again.");
        }
    };
    
    const handleChange = (e) => {
        // If the name of the input field is "userType", update userType in the state
        if (e.target.name === "userType") {
            setData({ ...data, userType: e.target.value });
        } else {
            // For other input fields, update the state normally
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            onChange={handleChange}
                            value={data.firstname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={handleChange}
                            value={data.lastname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={data.confirmPassword}
                            required
                            className={styles.input}
                        />
                        <select
                            name="userType"
                            value={data.userType}
                            onChange={handleChange}
                            className={styles.input}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        {data.userType === "admin" && (
                            <input
                                type="text"
                                placeholder="Enter Secret Key"
                                name="secretKey"
                                onChange={handleChange}
                                value={data.secretKey}
                                required
                                className={styles.input}
                            />
                        )}
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Signup;
