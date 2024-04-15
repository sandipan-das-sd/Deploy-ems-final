import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        
    });
    const history = useHistory();
	axios.defaults.withCredentials=true;
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8001/login', data);
			console.log(response.data);
			if (response.data.status === "Success") {
				if (response.data.role === "admin") {
					history.push('/');
                    alert("You logged in as a Admin")
				} if(response.data.role === "user") {
					history.push('/user');
                    alert("You logged in as a User")
                    localStorage.setItem('userEmail', response.data.email);
				}
			} else {
				alert("Login failed. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error.message);
			alert("An error occurred. Please try again later.");
		}
	}
	
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
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
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
