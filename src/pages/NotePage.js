import React, {useState, useEffect} from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const NotePage = ({match, history}) => {

    let noteId = match.params.id
    let[note, setNote] = useState(null)

    useEffect(() =>{
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
        updateNote()
        history.push('/')
    }

  return (
    <div className="note">
        <div className="note-header">
            <h3>
                <ArrowLeft onClick={handleSubmit}/>
            </h3>
        </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage