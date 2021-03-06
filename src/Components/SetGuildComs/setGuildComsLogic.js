import {useState, useEffect} from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useSetGuildComs = () => {
    const [currentGuilds, setCurrentGuilds] = useState([])
    const [allGuilds, setAllGuilds] = useState([])
    let alphabetical = allGuilds.sort(function(a,b){
      if(a.Name < b.Name) { return -1; }
      if(a.Name > b.Name) { return 1; }
      return 0;
    })

    useEffect(()=>{
        async function fetchAllGuilds(){
            await axios.get(process.env.REACT_APP_API_PREFIX+"/api/archDB/getallguilds")
            .then(function (response) {
                setAllGuilds(response.data, fetchGuildComs())
              })
              .catch(function (error) {
                console.log(error);
              })
        }
        async function fetchGuildComs(){
          await axios.get(process.env.REACT_APP_API_PREFIX+"/api/coms/get/guildcoms")
          .then(function (response) {
              setCurrentGuilds(response.data)
            })
            .catch(function (error) {
              console.log(error);
            })
        }


        fetchAllGuilds()

    },[])



    async function saveGuilds(){
      await axios.post(process.env.REACT_APP_API_PREFIX+"/api/coms/set/guildcoms",{Guilds: currentGuilds
      })
      .then(function (res) {
        toast.success("Ac & Co Guild List Saved!")
        })
        .catch(function (err) {
          console.log(err);
          toast.error("There was an error! Contact Onslawht!")
        })
    }

    return {currentGuilds, setCurrentGuilds, alphabetical, saveGuilds}
}

export default useSetGuildComs;
