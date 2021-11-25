const Blog = require('../models/blogModel')

const initialBlogs = [
  {
    title:"My first day at holiday",
    author:"Dzenan Velic",
    url:"https://test.blogs.com",
    likes:34
  },
  {
    title:"Is somethin erong in my attitude?",
    author:"John Smith",
    url:"https://test.blogsattitude.com",
    likes:78
  },
]


const blogsInDb=async()=>{
    const blogs = await Blog.find({})

    return blogs.map(b=> b.toJSON())

}

module.exports={
    initialBlogs,
    blogsInDb
}