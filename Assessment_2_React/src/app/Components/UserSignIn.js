/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. create UserSignIn component using uncontrolled way, should be class component, userName, password, 
// mobile can be passed and shown upon form submit, use a button to do the same
// 2. create StudentSignIn component using controlled way, should be class component, userName, 
// password, mobile can be passed and shown upon sign in clicj, use a button to do the same
/////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component,createRef } from "react";

export default class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef();
        this.passwordRef = createRef();
        this.mobileRef = createRef();
        
        this.state = {
            userName: "",
            password: "",
            mobile: "",
            showData: false,
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            userName: this.userNameRef.current.value,
            password: this.passwordRef.current.value,
            mobile: this.mobileRef.current.value,
            showData: true,
        });
    };

    render() {
        let displayData = null;
        if (this.state.showData) {
            displayData = (
                <div className = "mt-3">
                    <h2>User Sign In Data</h2>
                    <p><b>User Name:</b> {this.state.userName}</p>
                    <p><b>Password: </b> {this.state.password}</p>
                    <p><b>Mobile: </b> {this.state.mobile}</p>
                </div>
            );
        }
        return (
            <>
            <div>
                <h3>Un-Controlled User Sign In</h3>
                <form className = "form col-md-12" onSubmit={this.handleSubmit}>
                    <div className = "form-control">
                        <b>User Name</b>
                        <input type ="text" className="form-control" placeholder="ENter User Name" ref={this.userNameRef} required />
                    </div>
                    
                    <div className = "form-control">
                        <b>Password</b>
                        <input type ="password" className="form-control" placeholder="Enter Password" ref={this.passwordRef} required />
                    </div>

                    <div className = "form-control">
                        <b>Mobile</b>
                        <input type ="text" className="form-control" placeholder="Enter Mobile" ref={this.mobileRef} required />    
                    </div>

                    <div className = "form-control">
                    <button type="submit" className = "btn btn-primary mt-2">
                        Submit
                    </button>
                    </div>
                    {displayData}
                </form>
            </div>
            </>
        );
    }
}
