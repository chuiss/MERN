// import React, {Component} from 'react';

// import StudentChildCom from './StudentChildCom';

// export default class Student extends Component{
//     constructor (props){
//         super(props);
//         this.state = {
//             name: "Student Name",
//             address: "Student Address"
//         }
//     }
//     handleChildUpdate = (stuName, stuAddress) => {
//         this.setState({
//             name: stuName,
//             address: stuAddress
//         })
//     }    

//     render(){
//         return(
//             <>
//             <h1>Student Parent Component</h1>
//             <div className = "form col md 12">
//                 <div className = "form-control">
//                     <div className = "col-md-3">    
//                         <label>{this.state.stuName}</label>
//                     </div>
//                     <div className = "col-md-3">    
//                         <label>{this.state.stuAddress}</label>
//                     </div>
//                 </div>
//             </div>
//             <StudentChildCom  
//                 stuName={this.state.name} 
//                 stuAddress={this.state.address} 
//                 passToParent={this.handleChildUpdate}/>
//             </>
//         )
//     }


// }