/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'
function CreateNewBlog({ setErrorMessage,user }) {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [url,setUrl]=useState('')

  const timeout =() => {
    setTimeout(() => {
      setErrorMessage(null)
    },4000)
  }
  blogService.setToken(user.token)

  const handleBlog=(e) => {
    e.preventDefault()
    const newBlog={
      title,
      author,
      url
    }
    blogService
      .createBlog(newBlog)
      .then(res => {console.log('newBlog',res)
        setErrorMessage(`New blog "${newBlog.title}" created`)
        timeout()
      })

      .catch(err => {
        setErrorMessage(err.response.data.err)
        timeout()
      })
  }


  return (
    <div className="newBlogCreate">
      <form  onSubmit={handleBlog}>
        <div>
          <label name="title">title:</label>
          <input type="text" value={title}onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label name="author">author:</label>
          <input type="text" value={author}onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label name="url">url:</label>
          <input type="text" value={url}onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button type="submit" className="createBlog">Create</button>
      </form>
    </div>
  )
}
CreateNewBlog.propTypes={
  setErrorMessage:PropTypes.func.isRequired,
  user:PropTypes.object.isRequired
}
export default CreateNewBlog
