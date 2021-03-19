import './notesStyle.scss'
import React,{useState} from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import axios from 'axios'

function Notes({notes, id, setReports}){
    const [hide, setHide] = useState(true)
    const [note,setNote] = useState(notes)

    async function updateNotes(value,id){
      await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatenote",{ params: { value, id }})
      .then(function (response) {
          setReports(response.data[0], setHide(true))
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  return (
      <div>
        <button title="Notes" className={`notesButton ${notes==="" && "no-notes"}`}><CommentIcon onClick={()=>setHide(!hide)} className="notesIcon"/></button>
        <div className={`notesContainer ${hide ? "hide" : "show"}`}>
            <textarea className="notesTextarea" value={note} onChange={(e)=>setNote(e.target.value)}/>
            <button className="notesSaveButton" onClick={()=>updateNotes(note, id)} >Save</button>
        </div>


    </div>
  );
}

export default Notes;
