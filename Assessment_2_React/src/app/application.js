import React, { Component } from 'react';
//import Success from './Components/Success';
import StudentSignIn from './Components/StudentSignIn';
import UserSignIn from './Components/UserSignIn';




export default class ApplicationComponent extends Component {
    render(){
      return(
        <div>
          <div>{<UserSignIn/>}</div>
          <div>{<StudentSignIn/>}</div>
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

