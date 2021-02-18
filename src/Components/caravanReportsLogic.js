import axios from 'axios'
import {useState, useEffect} from 'react'

const useCaravanReports = ({id}) => {
    const [reports, setReports] = useState([])

    const [playerSearch, setPlayerSearch] = useState()
    const [guildSearch, setGuildSearch] = useState()
    
    let playerArray = playerSearch ? reports.filter((report) => report.username.toUpperCase().includes(playerSearch.toUpperCase())) : reports 
    let guildArray = guildSearch ? reports.filter((report) => report.guild.toUpperCase().includes(guildSearch.toUpperCase())) : reports
    let array = playerSearch ? playerArray : guildArray

    useEffect(()=>{
        async function fetchData(){
            await axios.get("http://localhost:5000/api/caravan_report/caravanreports") 
            .then(function (response) {
                setReports(response.data[0])   
              })
              .catch(function (error) {
                console.log(error);
              })             
            
        }
        fetchData()                       
    },[])

    async function updatePaid(value,id){
      await axios.get("http://localhost:5000/api/caravan_report/updatepaid",{ params: { value, id }}) 
      .then(function (response) {
          setReports(response.data[0])   
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })          
    }

    async function updateFine(value,id){
      await axios.get("http://localhost:5000/api/caravan_report/updatefine",{ params: { value, id }}) 
      .then(function (response) {
          setReports(response.data[0])   
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })          
    }

    async function updateNotes(value,id){
      await axios.get("http://localhost:5000/api/caravan_report/updatenote",{ params: { value, id }}) 
      .then(function (response) {
          setReports(response.data[0])   
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })          
    }

   


    
    return {array,setPlayerSearch,setGuildSearch,playerSearch,updatePaid,updateFine,updateNotes}
}

export default useCaravanReports;