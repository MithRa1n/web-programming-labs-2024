import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loging.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('userEmail', email);
            navigate('/');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <p className="mt-3 text-center">
                    Not a member? <Link to="/register">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
