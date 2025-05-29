//this component works as the container of redux and react-redux stuffs 
//this also makes segregation and re-usability of redux data
import { connect } from "react-redux"; //helps to connect react component with redux store
import { AddUserToStore } from "../../State/User/UserAction";
import UserComponent from "./UserComponent"; //importing the component which will be connected to redux store
//subscribing from store - mapStateToProps - allows to access the store data in react component as props
let mapStateToProps = (store)=>{
    return{
        user : store.userReducer.user //this is accessing user data from user reducer and will be used in component as props
    }
}

//publishing to store
let mapDispatchToProps = (dispatch)=>{
    return{
        addUser : (userData)=>{
            dispatch(AddUserToStore(userData))//dispatcher works as a pipline to take the action to store
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);