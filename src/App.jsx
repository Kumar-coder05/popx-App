import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'

export default function App(){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const u = localStorage.getItem('popx_user')
    if(u) setUser(JSON.parse(u))
  },[])

  return (
    <Router>
      <div className="app-container">
        <div className="mobile-frame">
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/login' element={<Login onLogin={(u)=>{ setUser(u); localStorage.setItem('popx_user', JSON.stringify(u)) }} />} />
            <Route path='/signup' element={<Signup onSignup={(u)=>{ setUser(u); localStorage.setItem('popx_user', JSON.stringify(u)) }} />} />
            <Route path='/account' element={<Account user={user} onLogout={()=>{ setUser(null); localStorage.removeItem('popx_user') }} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
