import { 
    GET_USER, 
    GET_USER_ERROR, 
    EDIT_USER, 
    EDIT_USER_ERROR, 
    DELETE_USER, 
    DELETE_USER_ERROR 
} from "../../constants/userActions"

const initialState = {
    user: {
        img: '',
        firstName: '',
        lastName: ''
    }
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USER: 
            return { 
                ...state, 
                user: action.userData 
            }
            case GET_USER_ERROR:
                console.log("EDIT_USER_ERROR")
        case EDIT_USER:
          return state
        case EDIT_USER_ERROR:
            console.log("EDIT_USER_ERROR")
        case DELETE_USER:
            return state
        case DELETE_USER_ERROR:
                console.log("DELETE_USER_ERROR")
        default:
            return state
    }
}

export default userReducer;
