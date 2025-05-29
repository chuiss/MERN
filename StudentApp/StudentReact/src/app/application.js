import React, { Component } from 'react';
//import Success from './Components/Success';
import LifeCycle from './Components/LifeCycleComponents';
import Student from './Components/StudentParentCom';
import UserLogin from './ApplicationComponents/Login';
import UserComponent from "./ApplicationComponents/User/UserContainer.js";
import SignUpComponent  from "./ApplicationComponents/User/SignUpComponent.js";
import SignInComponent from "./ApplicationComponents/User/SignInComponent.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



export default class ApplicationComponent extends Component {
    render(){
      return(
         <Router>  
          <Routes>
            
              <Route path="signup" element={<SignUpComponent  />}/>
              <Route path="login" element={<SignInComponent />}/>

          
          </Routes>
         </Router>      
      
      );
    }
}


