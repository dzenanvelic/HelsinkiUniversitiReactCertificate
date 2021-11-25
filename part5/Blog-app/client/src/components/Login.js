/* eslint-disable linebreak-style */
import React from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

function Login({ username, setUsername,password,setPassword,setUser,setErrorMessage }) {


  const handleSubmit=async(e) => {
    e.preventDefault()
    try {
      const userOne = await loginService.login({ username,password })
      setUser(userOne)
      console.log('user in login', userOne)
      window.localStorage.setItem('blogUser',JSON.stringify(userOne))
      blogService.setToken(userOne.token)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      },4000)
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label name="username">username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label name="password">password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
