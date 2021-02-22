

import axios from 'axios'
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'


const useLogin = ({setUser}) => {
  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [password2, setPassword2] =useState("")
  const [newAccount,setNewAccount] = useState(false)
  const [load,setLoad] = useState(false)
  let history = useHistory();

  function createAccount(username, password, password2){
    if(username === "" ){
      alert("username cannot be blank")
      return
    }
    if(password !== password2){
      alert("Passwords do not match")
      return
    }
    if(password === "" ){
      alert("Passwords cannot be blank")
      return
    }
    axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/create",
    {
      username,
      password
    })
    .then(function (response) {
      if(response.status === 201){
        setUsername("")
        setPassword("")
        setPassword2("")
        setUser(response.data.username)
        if(!response.data.approved){
          history.push('/forbidden')
        }else{
          history.push('/caravanreports')
        }
      }
    })
    .catch(function (error) {
      console.log({error});
      if(error.response.status === 422){alert("Username already in use.")}
    });
  }

  //==============================================================================================================================//
   function login(username, password){
      if(password === ""){
        alert("Password cannot be blank")
        return
      }
      if(username === ""){
        alert("Username cannot be blank")
        return
      }
      setLoad(true)
    axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/login",
      {
        username,
        password
      },{withCredentials: true})
      .then(function (response) {
        setUser(response.data.username)
        if(!response.data.approved){
          history.push('/forbidden')
        }else{
          history.push('/caravanreports')
        }

      })
      .catch(function (error) {
        setLoad(false)
        if(error.response !== undefined){
          if(error.response.status === 401){alert("Password is incorrect.")}
          if(error.response.status === 422){alert("Username does not exist.")}
        }else{
          alert("Server is currently Offline. Please contact Onslawht.")
        }
        console.log(error);
      })
    }

    return {username,setUsername,setPassword,setPassword2,createAccount,login,newAccount,password,password2,setNewAccount,load}
}

export default useLogin;
