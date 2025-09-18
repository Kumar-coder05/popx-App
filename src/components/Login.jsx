import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }){
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handle = ()=>{
    if(email && password){
      const user = { fullName: 'Marry Doe', phone:'', email, company:'', agency:'No' }
      if(onLogin) onLogin(user)
      nav('/account')
    }
  }

  const enabled = email.trim()!=='' && password.trim()!==''

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="title" style={{marginTop:10}}>Signin to your PopX account</div>
      <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>

      <label style={{marginTop:12}}>Email Address</label>
      <input className="input" placeholder="Enter email address" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label>Password</label>
      <input className="input" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />

      <div style={{marginTop:8}}>
        <button onClick={handle} className={"btn login-btn " + (enabled? 'enabled':'')} disabled={!enabled}>{enabled? 'Login' : 'Login'}</button>
      </div>

      <div className="spacer"></div>
    </div>
  )
}
