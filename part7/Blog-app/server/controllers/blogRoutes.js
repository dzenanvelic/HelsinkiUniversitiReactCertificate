const blogRouter = require('express').Router()
const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')
const userExtractor = middleware.userExtractor
/* blogRouter.get('/test', (request, response) => {
  response.send("This is a test")
}) */

/* const getTokenFrom =request=>{
  const authorization = request.get('authorization')
  if(authorization && authorization.toLowerCase()
  .startsWith('bearer ')){
    return authorization.substring(7)
  }
  return null
} */

blogRouter.get('/', async(request, response) => {
 const allblogs = await Blog.find({})
 .populate('user',{username:1, name:1})
 
 response.json(allblogs)
    
})



blogRouter.post('/',userExtractor, async(request, response) => {
  const body = request.body
  /* console.log("bodyContent",body.likes)
  console.log("bodyTitle",body.title)  */

/* const token = getTokenFrom(request) */
//console.log("Token",request.token)
//const token = request.token

//console.log("decodedToken",decodedToken)


if(!body.title  || !body.url ){
 return  response.status(400).json({error:"content missing"})
}
const user = request.user
//console.log("req.user",user)
 const blog = new Blog({
   title:body.title,
  author: body.author,
  url:body.url,
  likes:body.likes,
  user:user._id
 })
 const savedBlog = await blog.save() 
 user.blogs = user.blogs.concat(savedBlog._id)
 await user.save()
 response.json(savedBlog)
})

blogRouter.put('/:id',userExtractor,async(request,response)=>{
  const body = request.body
const blog={
  title: request.body.title,
  author:  request.body.author,
  url:  request.body.url,
  likes:  request.body.likes
}
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id,blog,{new:true})

  response.json(updatedBlog)
})

blogRouter.delete('/:id',userExtractor,async(request,response)=>{
  const id = request.params.id
  //console.log("req.params.is",id)
  const user = request.user
  console.log("requserid",request.user.id)
  const blog = await Blog.findById(id)
  console.log("bloguserid",blog.user.toString())

  if(request.user.id.toString() !== blog.user.toString()){
    return response.status(403).json({error:"You not allowed to manage this"})
  }
  //console.log("req.params.id",id)
    await Blog.findByIdAndRemove(id)
  response.status(200).json({message:"Blog successfuly deleted"}) 
})
 
module.exports= blogRouter