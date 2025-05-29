
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
// Replace this with your real action when ready
// import { SignInUser } from '../../State/User/UserAction';

const SignInComponent = () => {
  const userName = useRef();
  const userPassword = useRef();
  const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
    const credentials = {
      userName: userName.current.value,
      password: userPassword.current.value,
    };

    // Replace with real dispatch
    console.log("Signing in with", credentials);
    // dispatch(SignInUser(credentials));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Sign In</h2>
      <form className="p-4 shadow rounded bg-light" onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="signin-username" className="form-label fw-bold">
            Username
          </label>
          <input
            type="text"
            id="signin-username"
            className="form-control"
            placeholder="Enter your username"
            ref={userName}
            maxLength={20}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signin-password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            id="signin-password"
            className="form-control"
            placeholder="Enter your password"
            ref={userPassword}
            maxLength={20}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success w-100">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
