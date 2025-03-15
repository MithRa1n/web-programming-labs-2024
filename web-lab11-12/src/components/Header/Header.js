import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('userEmail');

    const handleSignOut = () => {
        console.log('Sign out clicked');
        localStorage.removeItem('userEmail');
        console.log('User signed out');
        navigate('/login')
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="title">Фільмовий Каталог</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/catalog" className="nav-link">Catalog</Link></li>
                        <li><Link to="/cart" className="nav-link">Cart</Link></li>
                        {user ? (
                            <li>
                                <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
                            </li>
                        ) : (
                            <>
                                <li><Link to="/login" className="auth-link login-link">Login</Link></li>
                                <li><Link to="/register" className="auth-link register-link">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
