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




    const sortSpecific = ascending ? (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1 : (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1





    return {setReports, array,setPlayerSearch,setGuildSearch,playerSearch,sortSpecific,sort,setSort,ascending,setAscending}
}

export default useCaravanReports;