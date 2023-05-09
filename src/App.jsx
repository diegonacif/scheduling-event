import { useContext } from "react";
// import { Outlet } from "react-router";
import { GlobalStyle } from "./GlobalStyle";
import { AuthEmailContext } from "./contexts/AuthEmailProvider";
import { Navigate, Outlet } from "react-router-dom";

export const App = () => {
  const {
    authLoading,
    isSignedIn
  } = useContext(AuthEmailContext);

  return (
    <>
      <GlobalStyle />
      {
        authLoading ?
        console.log("Loading Auth Data...") :
        isSignedIn ? <Outlet /> : <Navigate to="/" />
      }
    </>
  );
};
