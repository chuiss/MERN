import React, {Component} from 'react';

export default class StudentChild extends Component{
    constructor(props){
        super(props)
    
    
    }

    render(){
        return(
            <>
            <h2> Student Child </h2>
                <label>Student Name is: {this.props.stuName} </label>
                <label>Student Address is: {this.props.stuAddress}</label> <br></br>
                
                <button onClick={() => this.props.passToParent("New StuName", "New StuAddress")}>Update</button>
            </>
        )
    }
}