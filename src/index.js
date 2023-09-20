import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard/Dashboard'
import App1 from './App1'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Login from './LandingPage/Login'
import SignUp from './LandingPage/SignUp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path= '/' element={<LandingPage/>}/>
        <Route path= '/dashboard' element={<Dashboard/>}/>
        <Route path="/inputchat" element={<App1 />} />
        <Route path='/loginpage' element={<Login />} />
        <Route path='/signuppage' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
