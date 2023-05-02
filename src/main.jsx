import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './components/Login/Login.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { Event } from './components/Event/Event.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path={"home"} element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
