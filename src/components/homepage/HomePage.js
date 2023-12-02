import React from 'react';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <h1 className="header">Welcome to Our App</h1>
            <p className="description">
                Explore the features and functionalities of our application.
            </p>
            <div className="cta-buttons">
                <a href="/login" className="button">
                    Login
                </a>
                <a href="/registration" className="button">
                    Register
                </a>
            </div>
        </div>
    );
};
export default HomePage