// import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
// import { AuthGoogleContext } from "./contexts/AuthGoogleProvider";

export const PrivateRoutes = () => {
  // const { isSignedIn, isLoading, userCredential } = useContext(AuthGoogleContext);
  const f = false;
  const t = true;

  if(f) {
    return null;
  } else {
    // return userCredential ? <Outlet /> : <Navigate to="/" />;
    return t ? <Outlet /> : <Navigate to="/" />;
  }
}