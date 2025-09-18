import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup({ onSignup }){
  const nav = useNavigate()
  const [form, setForm] = useState({
    fullName:'',
    phone:'',
    email:'',
    password:'',
    company:'',
    agency:'yes'
  })

  const change = (e)=>{
    const {name,value} = e.target
    setForm(prev=>({...prev,[name]:value}))
  }

  const submit = ()=>{
    if(form.fullName && form.email && form.password){
      if(onSignup) onSignup(form)
      nav('/account')
    }
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="title" style={{marginTop:6}}>Create your PopX account</div>
      <div style={{marginTop:12}}>
        <label>Full Name*</label>
        <input name="fullName" className="input" value={form.fullName} onChange={change} placeholder="Marry Doe" />
        <label>Phone number*</label>
        <input name="phone" className="input" value={form.phone} onChange={change} placeholder="9876543210" />
        <label>Email address*</label>
        <input name="email" className="input" value={form.email} onChange={change} placeholder="name@mail.com" />
        <label>Password*</label>
        <input name="password" type="password" className="input" value={form.password} onChange={change} placeholder="Enter password" />
        <label>Company name</label>
        <input name="company" className="input" value={form.company} onChange={change} placeholder="Company (optional)" />

        <div style={{marginTop:6}}>Are you an Agency?*</div>
        <div className="radio-row">
          <label style={{display:'flex',alignItems:'center',gap:8}}><input type="radio" name="agency" value="yes" checked={form.agency==='yes'} onChange={change}/> Yes</label>
          <label style={{display:'flex',alignItems:'center',gap:8}}><input type="radio" name="agency" value="no" checked={form.agency==='no'} onChange={change}/> No</label>
        </div>

        <div style={{marginTop:16}}>
          <button className="btn btn-primary" onClick={submit}>Create Account</button>
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  )
}
