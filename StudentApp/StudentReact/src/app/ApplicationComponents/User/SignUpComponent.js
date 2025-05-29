import React, { useState,useRef, useEffect, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SaveUserToDBUsingFetch } from '../../State/User/UserAction';
let SignUpComponent = (props) => {
    let userState = useSelector((store) => store.userReducer);
    console.log("UserHookComponent", userState);

    let userName = useRef();
    let userPassword = useRef();

    useEffect(() => {
        console.log("UserHookComponent - useEffect called");
        userName.current.value = userState.user.userName;
        userPassword.current.value = userState.user.password;
    },[])
    let dispatch = useDispatch();

    let submitForm = (event) => {
        let userObj = {
            userName: userName.current.value,
            password: userPassword.current.value
        }
       dispatch(SaveUserToDBUsingFetch(userObj));

      
        event.preventDefault();
    }


    return (
<>
  <div className="container mt-5">
    <h2 className="text-center mb-4">Sign Up</h2>
    <form className="p-4 shadow rounded bg-light" onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label fw-bold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Please enter username"
          ref={userName}
          maxLength={20}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Please type user password"
          ref={userPassword}
          maxLength={20}
          required
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</>

    )
}
export default SignUpComponent;