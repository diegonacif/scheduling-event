import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  console.log({
    registerEmail: registerEmail,
    registerPassword: registerPassword
  })

  onAuthStateChanged(auth, (currentUser) => {
    if (loading) {
      console.log("loading user state")
      setIsLoading(true);
    } else {
      setUser(currentUser);
      setIsSignedIn(!!currentUser);
      setIsLoading(false);
    }
  })

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
  }

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      setUserMail(user?.user.email);
      setAccessToken(user?.user.accessToken);
      console.log({email: user?.user.email, accessToken: user?.user.accessToken});

    } catch (error) {
      console.log(error.message);
    }
  }

  const logoutUser = async () => {
  }

  return (
    <AuthEmailContext.Provider value={{
      setRegisterEmail,
      setRegisterPassword,
      setLoginEmail,
      setLoginPassword,
      registerUser
    }}>
      {children}
    </AuthEmailContext.Provider>
  )
}
