// pages/register/page.tsx

import React, { useEffect } from 'react';
import styles from './styles.module.css'; // Import the CSS module

const RegisterPage: React.FC = () => {
    // Use dynamic import to import useState only on the client-side
    const [useState, setUseState] = React.useState<any>();
    useEffect(() => {
        import('react').then((ReactModule) => {
            setUseState(ReactModule.useState);
        });
    }, []);

    // State variables to store form data
    const [employerName, setEmployerName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // You can perform form validation and submission logic here
        console.log('Form submitted:', {
            employerName,
            companyName,
            contactNumber,
            username,
            password
        });
    };

    return (
        <div className={styles['form-container']}> {/* Apply styles from CSS module */}
            <h1>Employer Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="employerName">Employer Name:</label>
                    <input
                        type="text"
                        id="employerName"
                        value={employerName}
                        onChange={(e) => setEmployerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
