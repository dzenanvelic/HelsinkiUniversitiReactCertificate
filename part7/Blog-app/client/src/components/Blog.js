import React, { useRef, useState ,useImperativeHandle

} from 'react'
import blogService from '../services/blogs'

const Blog= ({blog,user,setErrorMessage}) =>{
    const [showBlog,setShowBlog]= useState(false)
   const [blogUpdated,setBlogUpdated]= useState(blog)

    const blogHideStyle ={display: showBlog ? "": "none"}
    const blogsVisibility = ()=>{
        setShowBlog(!showBlog)
    }

  const handleLikes =(id)=>{
      const updatedBlog ={
          ...blog,
          likes:blog.likes + 1
      }
      blogService.updateBlog(id,updatedBlog)
  setBlogUpdated(updatedBlog)
  }
  const handleRemoveBlog=async(blogId)=>{
const result = window.confirm(`Remove blog: ${blog.title}`)
if(result){
const deleteBlogs = await blogService.deleteBlog(blogId)
//console.log("deleteBlogs",deleteBlogs)
setErrorMessage(deleteBlogs.message)
setTimeout(()=>{
    setErrorMessage(null)
},4000)
}
  }
   
    return (
     
          
 <div key={blog.id} className="singleBlog">
    <h3>{blog.title} <button onClick={blogsVisibility}>{showBlog ? "hide" : "view"}</button></h3>
    <div style={blogHideStyle}>
        <a href={blog.url} target='_blank' rel="noreferrer">read more</a>
    <p>{blogUpdated.likes} likes <button onClick={()=>handleLikes(blog.id)}>like</button></p>
    <p>author: {blog.author}</p>
    <p>created by: {blog.user.username}</p>
    
    
    {user?.id === blog?.user.id ? <button className="removeBlog"onClick={()=>handleRemoveBlog(blog.id)}>Remove</button>: ''}
    </div>
  

</div>

           
           
        
    )
}

export default Blog
