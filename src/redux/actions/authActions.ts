import { 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  LOGOUT, 
  AUTH_SUCCESS, 
  SIGNUP_SUCCESS 
} from './../../constants/authActions';
import { db } from './../../config/fbConfig';
import { Firebase } from "../../config/fbConfig"
import { createUserInformation, deleteUserInformation } from "../../utils/auth.utils";

export const logIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const resp = await Firebase.auth().signInWithEmailAndPassword(email, password);
      if (resp.user) {
        const token = await resp.user
          .getIdTokenResult(true)
          .then((idToken: any) => idToken.token);
        const refreshToken = resp.user.refreshToken;
        createUserInformation(token, refreshToken, resp.user.uid);
        dispatch(logInSuccess({ ...resp.user, token }))
      }
    } catch (err) {
      dispatch(logInError(err.message))
    }
  }
}

export const logInSuccess = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
}

export const logInError = (err: Error) => {
  return {
    type: LOGIN_ERROR,
    payload: err
  };
}

export const logOut = () => {
  return (dispatch: any) => {
    Firebase.auth()
      .signOut()
      .then(() => {
        deleteUserInformation();
        dispatch({
          type: LOGOUT
        });
      });
  };
};

export const saveUserAuthData = (userData: any) => {
  return {
    type: AUTH_SUCCESS,
    payload: userData
  };
};

export const signUpSuccess = (user: any) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user
  };
}

export const signUp = (newUser: any) => {
  return async (dispatch: any) => {
    try {
      const resp = await Firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      if (resp.user) {
        db.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        })
        const token = await resp.user.getIdTokenResult(true)
          .then((idToken: any) => idToken.token);
        const refreshToken = resp.user.refreshToken;
        createUserInformation(token, refreshToken, resp.user.uid);
        dispatch(signUpSuccess({ ...resp.user, token }))
      }
    }
    catch (err) {
      dispatch(logInError(err.message))
    }
  }
}
