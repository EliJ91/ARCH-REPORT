

import axios from 'axios'
import {useHistory} from "react-router-dom";
import {useEffect} from 'react'


const useHeader = ({setUser}) => {
    let history = useHistory();


    function logout(){
        setUser("")
        axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/logout",{},{withCredentials: true})
        history.push('/')
    }


    useEffect(()=>{
        async function fetchData(){
            await axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/stayLogged",{}, {withCredentials: true})
            .then(function (response){
                if(!response.data.approved){
                setUser(response.data.username)
                history.push('/forbidden')
                }else{
                setUser(response.data.username)
                history.push('/caravanreports')
                }
            }).catch(function (error) {
                console.log(error);
                history.push('/')
            }
        )}
    fetchData()
    },[])



    return {logout}
}

export default useHeader;
