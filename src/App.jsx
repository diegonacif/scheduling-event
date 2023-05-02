import { Outlet } from "react-router";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};
