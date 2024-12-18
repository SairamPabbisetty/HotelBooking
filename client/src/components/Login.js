import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import Navigate from './navbar';

const LoginPage = () => {
    const {addUser} = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);

        if (data && data.email) {
            addUser(data); 
            navigate("/profile");  
        } else {
            navigate("/register"); 
        }

    };

    return (
        <>
            <Navigate />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Login</h2>
                <form 
                    onSubmit={handleSubmit} 
                    className="shadow-lg p-4 rounded bg-light"
                >
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    {message && <p className="text-danger text-center">{message}</p>}

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
