  import Cookies from 'js-cookie';
  
  let token = Cookies.get('token') || Cookies.get('refreshToken');
  const id = Cookies.get('uid');
  
  export const initialState = {
    uid: id || null,
    token: token || null,
    error: null
  };
  
  export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "AUTH_SUCCESS":
        return {
          ...state,
          token: action.payload.token || state.token,
          uid: action.payload.uid || state.uid
        };
  
      case "LOGIN_ERROR":
        return {
          ...state,
          error: action.payload
        };
  
      case "LOGIN_SUCCESS":
        return {
          ...state,
          token: action.payload.token || state.token,
          uid: action.payload.uid || state.uid,
          error: null
        };
  
      case "LOGOUT":
        return {
          ...(state = initialState),
          token: null,
          uid: null
        };
        case "SIGNUP_SUCCESS": 
            return {
                ...state,
                token: action.payload.token || state.token,
                uid: action.payload.uid || state.uid,
                error: null
            }
        case "SIGNUP_ERROR": 
            return {
                ...state,
                error: action.err.message
            }
      default:
        return state;
    }
  };
  
  export default authReducer;
  