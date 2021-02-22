import useCaravanReports from './caravanReportsLogic'
import './caravanReports.scss'
import React,{useState} from 'react'
import SaveButton from './ButtonComponent/saveButton'
import Evidence from './EvidenceComponent/evidenceComponent'
import PaidButton from './PaidButtonComponent/paidButton'
import Notes from './NotesComponent/notesComponent'

function CaravanReports() {
    const {array,setPlayerSearch,setGuildSearch,updatePaid,updateFine,updateNotes,sortSpecific,sort,setSort,ascending,setAscending} = useCaravanReports()

    return (
    <>
      <div className="caravanReportsContainer">
          {/* <button onClick={()=>console.log(reports)}>Log Reports</button> */}
          <p className="offenceCount">Number of Offences: {array.length}</p>
          <div className="searchContainers">
            <div className="caravanReportsSearchQueries">
              {!ascending ? <p className="ascendingIcon" onClick={()=>setAscending(!ascending)}>▼</p>: <p className="ascendingIcon" onClick={()=>setAscending(!ascending)}>▲</p>}
              <select className="caravanReportsSort" placeholder="Search By..." onChange={(e)=>setSort(e.target.value)}>
              <option value="date" >Sort By</option>
                <option value="fine">Fine</option>
                <option value="username">Username</option>
                <option value="guild">Guild</option>
                <option value="paid">Paid</option>
                <option value="date" >Date</option>
              </select>
              <input className="searchInput" onChange={(e)=>setPlayerSearch(e.target.value.toUpperCase())} placeholder="Search Player"/>
              <input className="searchInput" onChange={(e)=>setGuildSearch(e.target.value.toUpperCase())} placeholder="Search Guilds"/>
            </div>
          </div>
          <div className="reportContainer">
            <div className="reportCardContainer">
                        <div className="title"> <p>USERNAME</p> <p >GUILD</p> <p>TYPE</p> <p>EVIDENCE</p> <p>FINE</p> <p>PAID</p> <p>DATE</p></div>
            </div>
                {array.sort(sortSpecific(sort)).map((report)=>(
                    <div className="reportCardContainer">
                        <div className="reportCard">
                          <p >{report.username}</p>
                          <p>{report.guild}</p>
                          <p>{report.type}</p>
                          <Evidence URL={report.image} />
                          <SaveButton  fine={report.fine} id={report._id} update={updateFine}/>
                          <PaidButton paid={report.paid} id={report._id} update={updatePaid}/>
                          <p className="dateContainer"> {new Date(report.date).toLocaleDateString("en-US")}</p>
                          <Notes notes={report.notes} id={report._id} update={updateNotes}/>
                        </div>
                    </div>
                ))}
          </div>
      </div>
    </>
    );
  }

  export default CaravanReports;
//.sort(function(a,b) { return parseFloat(b) - parseFloat(a.date) } )