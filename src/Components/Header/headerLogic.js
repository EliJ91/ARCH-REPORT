

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

    async function updateDB(){
        axios.get(process.env.REACT_APP_API_PREFIX+"/api/archDB/getGuilds")
        .then(function (res){
            if(res.status === 200){
                axios.get(process.env.REACT_APP_API_PREFIX+"/api/archDB/getPlayers")
                console.log('API Called')
            }
        })
    }

    async function test(username,guild){
        await axios.post(process.env.REACT_APP_API_PREFIX+'/api/archDB/checkinfo', {
            Name: username,
            GuildName: guild
        }).then(function (res){
            console.log(res.data)
        }).catch(function (err){
            console.log(err.response.data)
        })
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
                if (process.env.REACT_APP_BUILD === "DEV"){
                    setUser("Admin")
                }else{
                    history.push('/')
                }

            }
        )}
    fetchData()
    },[])



    return {logout, updateDB, test}
}

export default useHeader;
