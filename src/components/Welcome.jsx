import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome(){
  const nav = useNavigate()
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      height:'100vh',
      justifyContent:'flex-end',
      alignItems:'center',
      paddingBottom:'30px'
    }}>
      <div className="top-area"></div>
      <div className="title">Welcome to PopX</div>
      <div className="subtitle">We’re happy to have you here.
                                Manage your business, connect with your customers, and grow faster — all in one place.
                                Let’s get started on making your work easier!</div>
      <div style={{marginTop:20}}>
        <button className="btn btn-primary" onClick={()=>nav('/signup')}>Create Account</button>
        <button className="btn btn-secondary" style={{marginTop:12}} onClick={()=>nav('/login')}>Already Registered? Login</button>
      </div>
    </div>
  )
}