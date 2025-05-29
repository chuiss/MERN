import {connect} from 'react-redux'; 
import UserComponent from './UserComponent';
import {AddUserToStore} from '../../State/User/UserAction';

let mapStateToProps = (store) => {
    return {
        user: store.userReducer.user
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userData) => {
            dispatch(AddUserToStore(userData));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);