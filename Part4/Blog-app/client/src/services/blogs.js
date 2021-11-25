import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let token = null

const setToken =(newToken) => token = `bearer ${newToken}`




//console.log("token",setToken())
const getAllBlogs= async() => {

  const res = await axios.get(baseUrl)
  return res.data
}
const createBlog =async(newBlog) => {

  const config ={
    headers:{ Authorization:token } }

  // console.log("config",config)
  const response = await axios.post(baseUrl,newBlog,config)

  return response.data
}
const updateBlog = async(id,blogUpdated) => {
  try {
    const config ={
      headers:{ Authorization:token } }
    const updatedBlog = await axios.put(`${baseUrl}/${id}`,blogUpdated,config)

    return updatedBlog.data
  } catch (error) {
    console.log('Updating blog error',error)
  }

}

const deleteBlog =async(blogId) => {
  try {
    const config ={
      headers:{ Authorization:token } }
    const deletedBlog = await axios.delete(`${baseUrl}/${blogId}`,config)
    return deletedBlog.data

  } catch (error) {
console.log(error)
  }

}
export default{
  setToken,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
}