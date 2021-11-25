/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react'
import './App.css'
import Blog from './components/Blog'
import CreateNewBlog from './components/CreateNewBlog'
import Login from './components/Login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogServices from './services/blogs'
function App() {
  const [username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[user,setUser]= useState(null)
  const [blogs,setBlogs]= useState([])
  const [errorMessage,setErrorMessage]= useState(null)


  useEffect(() => {
    const getBlogs=async() => {
      const blogs = await  blogServices
        .getAllBlogs()
      setBlogs(blogs)
    }



    getBlogs()



  },[])

  useEffect(() => {
    const loggedBlogUser = window.localStorage.getItem('blogUser')

    if(loggedBlogUser){
      const user = JSON.parse(loggedBlogUser)
      setUser(user)
      //console.log('blogServices',blogServices.setToken(user.token))
      //console.log("tokem",user.token)
    }
  },[])
  const handleLogout=() => {
    setUser(null)
  }


  return (
    <div className="mainApp">
      <h1>Blogs main page</h1>

      <Notification errorMessage={errorMessage}/>

      <Togglable buttonValue="login">
        { !user ? <Login username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          user={user}
          setUser={setUser}
          setErrorMessage={setErrorMessage}
        /> : <div>
          <h3>{user.username} <span>logged in</span> <button onClick={handleLogout}>Logout</button></h3>

          <h2>Create new blog</h2>
          <Togglable buttonValue="create new blog">
            <CreateNewBlog setErrorMessage={setErrorMessage} user={user}/>
          </Togglable>
        </div>}
      </Togglable>

      {

        blogs.map((blog) => {
          return <Blog  key= {blog.id} blog={blog} user={user} setErrorMessage={setErrorMessage}/>
        })
      }

    </div>

  )
}

export default App
