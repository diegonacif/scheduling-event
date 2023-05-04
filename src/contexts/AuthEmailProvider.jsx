import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
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

  console.log(refreshToken)
  
  // Firestore Loading
  const [value, loading, error] = useAuthState(auth);
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
      console.log(user)
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
      console.log({email: user?.user.email, refreshToken: user?.user.refreshToken});
    } catch (error) {
      console.log(error.message);
    }
  };

  // const logoutUser = async () => {
  // }

  return (
    <AuthEmailContext.Provider value={{
      setRegisterEmail,
      setRegisterPassword,
      setLoginEmail,
      setLoginPassword,
      registerUser,
      loginUser
    }}>
      {children}
    </AuthEmailContext.Provider>
  )
}

AuthEmailProvider.propTypes = {
  children: PropTypes.node,
};