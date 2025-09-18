import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera } from 'lucide-react'  // make sure lucide-react is installed

export default function Account({ user, onLogout }){
  const nav = useNavigate()
  const u = user || { fullName:'Marry Doe', phone:'1234567890', email:'Marry@gmail.com', company:'ACME', agency:'No' }
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100")

  const logout = ()=>{
    if(onLogout) onLogout()
    nav('/')
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="title" style={{marginTop:6}}>Account Settings</div>
      <div style={{marginTop:12, padding:'12px 0'}}>
        <div className="profile" style={{position:'relative', display:'flex', alignItems:'center', gap:'12px'}}>
          <img src={profilePic} alt="profile" style={{width:'100px',height:'100px',borderRadius:'50%',objectFit:'cover'}} />
          <label style={{
            position:'absolute',
            bottom:'0',
            left:'70px',
            background:'#fff',
            borderRadius:'50%',
            padding:'6px',
            cursor:'pointer',
            boxShadow:'0 0 4px rgba(0,0,0,0.2)'
          }}>
            <Camera size={18} />
            <input type="file" accept="image/*" onChange={handleImageChange} style={{display:'none'}} />
          </label>
          <div style={{textAlign:'left'}}>
            <div style={{fontWeight:700}}>{u.fullName}</div>
            <div style={{fontSize:13,color:'#666'}}>{u.email}</div>
          </div>
        </div>

        <p className="small-muted">In Account Settings, you can edit your profile, update your password, and manage preferences. It helps you keep your information secure and always up to date.</p>

        <div style={{marginTop:12,borderTop:'1px dashed #e8e8e8',paddingTop:12}}>
          <div style={{textAlign:'left',marginBottom:8}}><strong>Full Name</strong><div style={{color:'#444'}}>{u.fullName}</div></div>
          <div style={{textAlign:'left',marginBottom:8}}><strong>Phone</strong><div style={{color:'#444'}}>{u.phone}</div></div>
          <div style={{textAlign:'left',marginBottom:8}}><strong>Email</strong><div style={{color:'#444'}}>{u.email}</div></div>
          <div style={{textAlign:'left',marginBottom:8}}><strong>Company</strong><div style={{color:'#444'}}>{u.company}</div></div>
          <div style={{textAlign:'left',marginBottom:8}}><strong>Agency</strong><div style={{color:'#444'}}>{u.agency}</div></div>
        </div>

        <div style={{marginTop:18}}>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  )
}