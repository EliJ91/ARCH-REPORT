

import axios from 'axios'
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'


const useHeader = () => {
    let history = useHistory();
    const [user, setUser] = useState("")
 

    useEffect(()=>{
      async function fetchData(){
          const user = await axios.get(process.env.REACT_APP_API_PREFIX+"/api/user/stayLogged", {withCredentials: true}) 
          if(!user){
              console.log("Not logged in.")
          }    
          setUser(user.data.username) 
          history.push('/caravanreports')
      }
      fetchData() 
                           
  },[])

    return {user}
}

export default useHeader;
