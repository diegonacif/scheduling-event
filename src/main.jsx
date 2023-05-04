import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App.jsx'
import { Login } from './components/Login/Login.jsx';
import { Event } from './components/Event/Event.jsx';
import { AuthEmailProvider } from './contexts/AuthEmailProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthEmailProvider>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route element={<App />}>
          <Route path={"home"} element={<Event />}/>
        </Route>
      </Routes>
    </AuthEmailProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
