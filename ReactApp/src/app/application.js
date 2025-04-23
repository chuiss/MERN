import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Footer from "./CommonComponents/FooterComponents";
import Header from "./CommonComponents/HeaderComponents";
import Home from "./CommonComponents/HomeComponents";
import NotFound from "./CommonComponents/NotFoundComponents";
import About from "./CommonComponents/AboutComponents";

export default class ApplicationComponent extends Component {

    /**
     *
     */
    constructor(props) {
        super();
        this.state = {
            user : {
                    userName : "Test User",
                    userAddress : "SomeAddress"
                    }
        }
        this.sessionName = "MERNStack - React Props"
    }

    changeUserNameEvent = (evt)=>{

        //this.state.userName = "Tejasvi" //with this way render method will not be called and no new virtual dom will be created

        //we have registered API (callback) from react to make state changes and call render method
        //so that new virtual dom gets created

        this.setState({
            userName : `Dat -  
                This is coming from Application Component
                This is coming from Application Component

                This is coming from Application Component

                This is coming from Application Component`,
            //userAddress : "Somewhere on earth!!!!!!"
        })

        //updating the state using force update - not recommended but can be used if needed

        // this.state.userName = `Dat -  
        //         This is coming from Application Component
        //         This is coming from Application Component

        //         This is coming from Application Component

        //         This is coming from Application Component`

        // this.forceUpdate()//it will directly call the render method and will skip life cycle methods such as shouldComponentUpdate

        //this.sessionName = "The session is on react and state and its virtual dom coupling!!!"
        console.log(this.state.userName)//not updated immediately as - the change is done via callback and as soon as callback 
        // returns value the log line is passed already executed

        //alert("User Name is updated!!")

        evt.preventDefault();
    }


    render(){
        
        console.log("Render method is called!!")
        return( //vitual dom or jsx code (javascript like xml structure)
            <Router>
                <div className="topdiv">
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user} />}/>
                            <Route path="home" element={<Home />}/>
                            <Route path="about" element={<About />}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer sessionName={this.sessionName}/>
                </div>    
            </Router>      
        )
    }
}






































//update life cycle method
// shouldComponentUpdate(nextProps, nextState){
   // let name = "Joel", x=5, y = 9;
    //let sessionName = "MERNStack - React Props"
//     console.log(nextState) //the updated state version
//     //console.log(nextProps)
//     // if (this.state.userName == nextState.userName) {
//     //     return false //will not invoke render method
//     // } else {
//     //     return true
//     // }


//     return true //if we need to call render next
//     //return false //if we need not to call render next
// }


// <hr />
//                     <hr />
//                     <Home />
//                     <b>{this.state.userName}</b>
//                     <hr />
//                     {/* binding event to a button in react component */}
//                     <button onClick={this.changeUserNameEvent}>Change User Name</button>
//                     <hr />
//                     <NotFound />
//                     <hr />


{/* 
    
    <h1>This is coming from Application Component</h1>
                    
                    <b>{name}</b>
                    <hr />
                    <b>Multiply 5*10 = {5*10} </b>
                    <hr />
                    <b>Sum 5+9 = {5+9} </b> */}