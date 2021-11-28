import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import { useField } from './hooks'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  
  return (
    <div>
      <Link to="/" style={padding}>anecdotes</Link>
      <a href='/create' style={padding}>create new</a>
      <a href='/about' style={padding}>about</a>
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li  key={anecdote.id} >{<Link to={`/${anecdote.id}`}>{anecdote.content}</Link>}</li>)}
    </ul>
  </div>
)
const Anecdote =({anecdotes})=>{
  const id = useParams().id
  const anecdote = anecdotes.filter(a=>a.id === id)
  //console.log("anecdote",anecdote)
 return( <div>
    <h2>Anecdote</h2>
    <h2>{anecdote[0]?.content}</h2>
    <p>votes: {anecdote[0]?.votes}</p>
    <p>for more info see: <a href={anecdote[0]?.info} target="_blank" rel="noreferrer">{anecdote[0]?.info}</a></p>

  </div>
 )}


const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {
 
  /* const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('') */
const history = useHistory()
 
const anecdote = useField('text')
const authorH = useField('text')
const information = useField('text')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content:anecdote.value,
      author:authorH.value,
      info:information.value,
      votes: 0
    })
  
    history.push('/')
  }
const handleReset=()=>{
  anecdote.resetfields()
  authorH.resetfields()
  information.resetfields()
}
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content 
          <input name='content' 
            value={anecdote.value} 
           type={anecdote.type}
           onChange={anecdote.onChange} />
        </div>
        <div>
          author
          <input name='author'  
          value={authorH.value} 
          type={authorH.type}
          onChange={authorH.onChange} />
        </div>
        <div>
          url for more info
          <input name='info' 
          value={information.value} 
          type={information.type}
          onChange={information.onChange}/>
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={handleReset}>reset</button>
      </form>
     
    </div>
  )

}
const Notification =({notification})=>{
   
   const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification === null){
    return null
  }
  return (
    <div style={style} className="notification">
{notification}
    </div>
  )
  
}
const App = () => {
  
  const [notification, setNotification] = useState(null)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
      setNotification(`a new anecdote "${anecdote.content}" just created`)
    setTimeout(()=>{
setNotification(null)
    },10000)
    
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
      <Menu />
      <Switch>
       
       
       

      <Route path="/create">
         <CreateNew addNew={addNew} />
      </Route>
      <Route  path="/about">
        <About  />
      </Route>
       <Route exact path="/">
          <Notification notification={notification}/>
           <AnecdoteList anecdotes={anecdotes} />
        </Route>
       
       <Route path="/:id">
         
           <Anecdote anecdotes={anecdotes} />
        </Route>
     
     
      
      </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;