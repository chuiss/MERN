// import React, {Component} from 'react';

// export default class LifeCycle extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             data: "Initial Data"
//         }
    

//     }
    
//     updateData = (data) => {
//         this.setState({
//             data
//         })
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("ShouldComponentUpdate called")
//         if(this.state.data !== nextState.data){
//             console.log("Data has changed, component will update")
//             return true
//         }else{
//             console.log("Data has not changed, component will not update")  
//             return false
//         }
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("getSnapshotBeforeUpdate called", prevProps, prevState)
//         return {prevProps, prevState}
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("componentDidUpdate called", snapshot)
       
//     }

//     componentWillUnmount() {
//         console.log("componentWillUnmount called")
//     }
//     render(){
//         return(
//             <>
//             <h1>Life Cycle Methods</h1>
//             <div className = "form col md 12">
//                 <div className = "form-control">
//                     <div className = "col-md-3">    
//                         <label>{this.state.data}</label>
//                     </div>
//                 </div>
//             </div>
//             <button onClick={() => this.updateData("updateData")}>Update Data</button>
//             </>
//         )
//     }

// }