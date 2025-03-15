import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loging.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isEmailTaken = users.some((user) => user.email === email);

        if (isEmailTaken) {
            alert('This email is already registered. Please use another email.');
            return;
        }

        if (password === confirmPassword) {
            const newUser = { email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('userEmail', email);
            alert('Registration successful! You are now logged in.');
            navigate('/');
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-4">Register</h2>
                <form onSubmit={handleRegister}>
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
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                    Already a member? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
