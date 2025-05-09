/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. create UserSignIn component using uncontrolled way, should be class component, userName, password, 
// mobile can be passed and shown upon form submit, use a button to do the same
// 2. create StudentSignIn component using controlled way, should be class component, userName, 
// password, mobile can be passed and shown upon sign in clicj, use a button to do the same
/////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {Component, createRef} from "react";

//Controlled Component
export default class StudentSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      password: "",
      mobile: "",
      showData: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showData: true});
  };

  render() {
    let displayData = null;
    if (this.state.showData) {
      displayData = (
        <div className="mt-3">
          <h2>Student Sign In Data</h2>
          <p><b>Student Name:</b> {this.state.studentName}</p>
          <p><b>Password:</b> {this.state.password}</p>
          <p><b>Mobile:</b> {this.state.mobile}</p>
        </div>
      );
    }
   
    return (
      <div>
        <h3>Controlled Student Sign In</h3>
        <form onSubmit={this.handleSubmit}>
        <div className = "form-control">
          <b>Student Name</b>
        <input type="text" name="studentName" placeholder="Student Name" onChange={this.handleChange} />
        </div>

        <div className = "form-control">
            <b>Password</b>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
        </div>
         
        <div className = "form-control">
            <b>Mobile</b>
          <input type="text" name="mobile" placeholder="Mobile" onChange={this.handleChange} />
        </div>  
          <button type="submit">Submit</button>
        </form>
        {displayData}
      </div>
    );
  }
}

