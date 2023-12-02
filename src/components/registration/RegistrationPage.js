import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="registration-container">
            <h1 className="header">Registration Page</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button className="button1" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationPage;