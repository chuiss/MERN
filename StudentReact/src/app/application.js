import React, { Component } from 'react';
//import Success from './Components/Success';
import LifeCycle from './Components/LifeCycleComponents';
import Student from './Components/StudentParentCom';
import UserLogin from './ApplicationComponents/Login';



export default class ApplicationComponent extends Component {
    render(){
      return(
        <div>
          <div>{<Student/>}</div>
          <div>{<LifeCycle/>}</div>
          <div>{<UserLogin/>}</div>
        </div>
      );
    }
}


// function App() {
//   return (
//     <div><Success /></div>
//     <div>{<UserSignIn/>}</div>
//   );
// }

// export default App;

