/*
- Create a functional component name Login 
- Use Div Baased Structure to show text boxes for login details needs to be 4
- Create one event handler and bind the state change with it to call re-render
- Use one of the textbox to change the data without using event handler, but using inline code
*/


import React, { useState } from 'react';
// functional component named Login
const Login = () => {
    // decalre state variables using useState hook
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //handles the login event and logic
    const handleLogin = (event) => {
        event.preventDefault();
        if (userName === 'admin' && password === 'admin') {
            alert('Login successful!');
        } else {
            setErrorMessage('Invalid username or password!');
        }
    };

    // shared event handler for role change
    const handleRoleChange = (event) => {
        setRole(event.target.value); // work same way as setState to call react renderer
    }

    // JSX code to render the login form
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select id="role" value={role} onChange={handleRoleChange}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                        
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
        
    </>
    );
}

export default Login;