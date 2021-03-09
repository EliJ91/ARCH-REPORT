import axios from 'axios'
import {useState, useEffect} from 'react'

const useCaravanReports = () => {
    const [reports, setReports] = useState([])

    const [playerSearch, setPlayerSearch] = useState()
    const [guildSearch, setGuildSearch] = useState()
    const [ascending, setAscending] = useState(false)
    const [sort, setSort] = useState("date")

    let playerArray = playerSearch ? reports.filter((report) => report.username.toUpperCase().includes(playerSearch.toUpperCase())) : reports
    let guildArray = guildSearch ? reports.filter((report) => report.guild.toUpperCase().includes(guildSearch.toUpperCase())) : reports
    let array = playerSearch ? playerArray : guildArray


    useEffect(()=>{
        async function fetchData(){
            await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/caravanreports")
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
      await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatepaid",{ params: { value, id }})
      .then(function (response) {
          setReports(response.data[0])
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    async function updateFine(value,id){
      await axios.get(process.env.REACT_APP_API_PREFIX+"/caravan_report/updatefine",{ params: { value, id }})
      .then(function (response) {
          setReports(response.data[0])
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    async function updateNotes(value,id){
      await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatenote",{ params: { value, id }})
      .then(function (response) {
          setReports(response.data[0])
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
    }



    const sortSpecific = ascending ? (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1 : (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1





    return {array,setPlayerSearch,setGuildSearch,playerSearch,updatePaid,updateFine,updateNotes,sortSpecific,sort,setSort,ascending,setAscending}
}

export default useCaravanReports;