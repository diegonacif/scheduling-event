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

  const [userId, setUserId] = useState("");
  const [refreshToken, setRefreshToken] = useSessionStorage('token', null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    !!refreshToken === true ?
    setIsSignedIn(true) :
    setIsSignedIn(false)
  }, [refreshToken])

  const [lastError, setLastError] = useState({});
  const [newErrorCode, setNewErrorCode] = useState("");
  const [newErrorSection, setNewErrorSection] = useState("");
  const [toastRefresh, setToastRefresh] = useState(false);

  // console.log(lastError)

  useEffect(() => {
    setLastError({
      code: newErrorCode,
      section: newErrorSection
    })
  }, [newErrorCode, newErrorSection])

  const handleLastError = (code, section) => {
    if(code === "auth/user-not-found") {
      setNewErrorCode("Usuário não encontrado");
    } else if (code === "auth/wrong-password") {
      setNewErrorCode("Senha inválida");
    } else if (code === "auth/email-already-in-use") {
      setNewErrorCode("Email já cadastrado.");
    } else {
      setNewErrorCode("Erro ao logar-se / registrar-se");
      console.log({code: code, section: section});
    }

    if(section === "login") {
      setNewErrorSection("Erro ao logar-se");
    } else if(section === "register") {
      setNewErrorSection("Erro ao registrar-se");
    } else (
      setNewErrorSection("")
    )

    setToastRefresh(current => !current)
  }

  // Firestore Loading
  const [value, loading] = useAuthState(auth);
  // console.log({value: value?.uid});
  useEffect(() => {
    setAuthLoading(loading);
    setUserId(value?.uid);
    setRefreshToken(value?.refreshToken);
  }, [loading]);


  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRefreshToken(user.user.refreshToken);
      console.log("Register success!");
    } catch (error) {
      handleLastError(error.code, "register");
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
      handleLastError(error.code, "login");
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setRefreshToken(null);
      console.log("Logout success!");
    } catch (error) {
      handleLastError(error.code, "logout")
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
      logoutUser,
      authLoading,
      isSignedIn,
      lastError,
      toastRefresh,
      userId
    }}>
      {children}
    </AuthEmailContext.Provider>
  )
}

AuthEmailProvider.propTypes = {
  children: PropTypes.node,
};