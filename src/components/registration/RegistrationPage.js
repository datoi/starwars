import React, {useState} from 'react';
import './RegistrationPage.css';
import axios from "axios";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const axiosInstance = axios.create({
        baseURL: 'https://swapi.dev/api/',
    })

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
                <br/>
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
                <br/>
                <button onClick={registerClick} className='button'>Register</button>
            </form>

        </div>
    );
};

export default RegistrationPage;