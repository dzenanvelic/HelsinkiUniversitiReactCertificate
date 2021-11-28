const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const Blog = require('../models/blogModel')

beforeEach(async()=>{
    await Blog.deleteMany({})

    for(let blog of helper.initialBlogs){
    let blogObject = new Blog(blog)
    await blogObject.save()
}
})


test('blog returned as JSON',async()=>{
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
 test("all blogs are returned", async()=>{
     const response = await api.get('/api/blogs')
     expect(response.body).toHaveLength(helper.initialBlogs.length)
 }) 
 test('does blogs contains id',async()=>{
     const blogs = await api.get('/api/blogs')
     blogs.body.map((b=> expect(b.id).toBeDefined()))
 }) 
test('a valid blog can be added',async()=>{
    const newBlog ={
        title:"You can add new blog",
        author:"Dzenan Velic",
        url:'https://canaddnote.com',
        likes:12,

    }

    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
    const contents = blogsAtEnd.map(b=>b.title)
    expect(contents).toContain('You can add new blog')
})
test(" blog likes has default value of zero",async()=>{
    const newBlog ={
        title:"This blog has no likes number",
        author:"Dzenan Velic",
        url:'https://canaddnote.com',
       

    }
    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)

     const blogsAtEnd = await helper.blogsInDb()
     const contents = blogsAtEnd.map(m=>expect(m.likes).toBeDefined())
     

})
test('if in blog missing title or url return error 400',async()=>{
 const newBlog ={
     
        author:"Dzenan Velic",
        url:'https://thisworks',
        likes:34,
       

    }

    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})