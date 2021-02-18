

import axios from 'axios'
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'


const useLogin = () => {
  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [password2, setPassword2] =useState("")
  const [newAccount,setNewAccount] = useState(false)
  const [theUser,setUser] = useState("")
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
      }
    }) 
    .catch(function (error) {
      console.log({error});
      if(error.response.status === 422){alert("Username already in use.")}
    });
  }

  //==============================================================================================================================//
   function login(username, password){
    console.log("Function login called")
      if(password === ""){
        alert("Password cannot be blank")
        return
      }
      if(username === ""){
        alert("Username cannot be blank")
        return
      }
    console.log("Next line is axios call")
    axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/login",
      {
        username,
        password
      },{withCredentials: true})
      .then(function (response) {
        console.log(response)
        setUser(response.data.username)
        if(response.status === 201){
          console.log("logged in")
        }
      }) 
      .catch(function (error) {
        // if(error.response.status === 401){alert("Password is incorrect.")}
        // if(error.response.status === 422){alert("Username does not exist.")}
        console.log(error);
      })
    }


    return {username,setUsername,setPassword,setPassword2,createAccount,login,newAccount,password,password2,setNewAccount,theUser}
}

export default useLogin;
