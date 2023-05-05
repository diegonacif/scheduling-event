import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';
import { useSessionStorage } from "usehooks-ts";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({ children }) => {
  // const [user, setUser] = useState();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [authLoading, setAuthLoading] = useState(true);

  const [refreshToken, setRefreshToken] = useSessionStorage('token', null);

  // console.log({refreshToken: !!refreshToken})
  
  // Firestore Loading
  const [value, loading, error] = useAuthState(auth);
  // console.log({value: value});
  useEffect(() => {
    setAuthLoading(loading);
    value && setRefreshToken(value.refreshToken)
    error && console.log(error)
    
  }, [loading]);


  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRefreshToken(user.user.refreshToken);
      console.log("Register success!")
    } catch (error) {
      console.log(error.message)
    }
  };

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      setRefreshToken(user.user.refreshToken);
      console.log("Login success!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setRefreshToken(null);
      console.log("Logout success!");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <AuthEmailContext.Provider value={{
      setRegisterEmail,
      setRegisterPassword,
      setLoginEmail,
      setLoginPassword,
      registerUser,
      loginUser,
      logoutUser
    }}>
      {children}
    </AuthEmailContext.Provider>
  )
}

AuthEmailProvider.propTypes = {
  children: PropTypes.node,
};