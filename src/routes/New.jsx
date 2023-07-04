import blogFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom" 
import "./New.css"

const New = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async(e) => {
    e.preventDefault()

    const post = {title, body, userID: 1}

    await blogFetch.post("/posts", {
      body: post
    })

    navigate("/")
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'> 
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          name="title" 
          id="title" 
          placeholder="Digite o título"
          onChange={(ev) => setTitle(ev.target.value)}/> 
        </div>
        <div className='form-control'> 
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
          name="body" 
          id="body" 
          placeholder="Digite o título" 
          onChange={(ev) => setBody(ev.target.value)}>
          </textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn'/>
      </form>
    </div>
  )
}

export default New