import useCaravanReports from './caravanReportsLogic'
import './caravanReports.scss'
import React,{useState} from 'react'
import UpdateFine from './UpdateFine/updateFine'
import Evidence from './EvidenceComponent/evidenceComponent'
import PaidButton from './PaidButtonComponent/paidButton'
import Notes from './NotesComponent/notesComponent'
import ReportCard from './ReportCard/reportCard'

function CaravanReports() {
    const {array,setPlayerSearch,setGuildSearch,updatePaid,updateFine,updateNotes,sortSpecific,sort,setSort,ascending,setAscending,setReports} = useCaravanReports()

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
            <div className="reportCardTitles">
                        <div className="title"> <div>&nbsp;</div> <p>USERNAME</p> <p >GUILD</p> <p>IMAGE</p> <p>FINE</p> <p>PAID</p> <p>DATE</p></div>
            </div>
            <div className="reportCaravanContainer">
                {array.sort(sortSpecific(sort)).map((report)=>(
                    <div className="reportCardContainer">
                      <ReportCard
                      username={report.username}
                      guild={report.guild}
                      image={report.image}
                      fine={report.fine}
                      paid={report.paid}
                      id={report._id}
                      date={report.date}
                      notes={report.notes}
                      setReports={setReports}
                      />
                    </div>
                ))}
            </div>
          </div>
      </div>
    </>
    );
  }

  export default CaravanReports;
//.sort(function(a,b) { return parseFloat(b) - parseFloat(a.date) } )