import {signInWithGoogle, logoutFirebase } from '../../firebase/providers'
import { checkingCredentials, logout, login } from "./"


export const startGoogleSignIn = () =>{
    return async(dispatch) => {
        dispatch (checkingCredentials());
        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch(logout(result.errorMessage));
        dispatch( login(result) )
    }
}

export const startLogout = () => {
    return async (dispatch) => {
      await logoutFirebase();
      dispatch(logout());
    }
  }