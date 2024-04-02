import React from 'react'

const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRhbGVsIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.jOVRiCPq4pnmJwI9E3jtW19TLV2tt2fnMu3E8gWWYjA")
        window.location.replace("/")
    }
  return (
    <div>
    <form style={{padding:20}} onSubmit={handleSubmit}> 
     <input type="text" placeholder="email" />
     <input type="password" placeholder="password" />
     <input type="submit" value="Login" />
</form>
</div>
  )
}

export default Login