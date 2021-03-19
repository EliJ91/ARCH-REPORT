import './reportCard.scss'
import React,{useState} from 'react'
import UpdateFine from '../UpdateFine/updateFine'
import Evidence from '../EvidenceComponent/evidenceComponent'
import PaidButton from '../PaidButtonComponent/paidButton'
import Notes from '../NotesComponent/notesComponent'
import useReportCard from './reportCardLogic'
import Delete from '../DeleteComponent/deleteComponent'

function ReportCard(props) {
    const {updateNotes} = useReportCard(props.setReports)
    return (
      <div className="caravanReportCard">
        <Delete/>
        <p className="reportCardUsername">{props.username}</p>
        <p className="reportCardGuild">{props.guild}</p>
        <Evidence URL={props.image} />
        <UpdateFine  fine={props.fine} id={props.id} setReports={props.setReports}/>
        <PaidButton  paid={props.paid} id={props.id} setReports={props.setReports}/>
        <p className="reportCardDate"> {new Date(props.date).getMonth()}-{new Date(props.date).getDate()}</p>
        <Notes  notes={props.notes} id={props.id} setReports={props.setReports}/>
      </div>
    );
  }

  export default ReportCard;