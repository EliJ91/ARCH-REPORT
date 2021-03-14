import './notesStyle.scss'
import React,{useState} from 'react'
import CommentIcon from '@material-ui/icons/Comment';

function Notes({notes, id, update}){
    const [hide, setHide] = useState(true)
    const [note,setNote] = useState(notes)
    
    async function save(){
        await update(note, id)
        setHide(true)
      }

  return (
      <div>
        <button title="Notes" className={`notesButton ${notes==="" && "no-notes"}`}><CommentIcon onClick={()=>setHide(!hide)} className="notesIcon"/></button>
        <div className={`notesContainer ${hide ? "hide" : "show"}`}>
            <textarea className="notesTextarea" value={note} onChange={(e)=>setNote(e.target.value)}/>
            <button className="notesSaveButton" onClick={()=>save()} >Save</button>
        </div>

     
    </div>
  );
}

export default Notes;
