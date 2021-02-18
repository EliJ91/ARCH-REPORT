

import axios from 'axios'
import {useState, useEffect} from 'react'

const useLogin = () => {

  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [password2, setPassword2] =useState("")
  const [newAccount,setNewAccount] = useState(false)


  function createAccount(username, password, password2){
      console.log('createAccount fired')
    if(username === "" ){
      alert("username cannot be blank")
      console.log("username cannot be blank")
      return
    }
    if(password !== password2){
      alert("Passwords do not match")
      console.log("Passwords do not match")
      return
    }
    if(password === "" ){
      alert("Passwords cannot be blank")
      console.log("Passwords cannot be blank")
      return
    }
    console.log("hitting api")
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
      console.log(response);
    }) 
    .catch(function (error) {
      if(error.response.status === 422){alert("Username already in use.")}
      console.log("ERROR",error);

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
      
      axios.post(process.env.REACT_APP_API_PREFIX+"/api/user/login",
      {
        username,
        password
      },{withCredentials: true})
      .then(function (response) {
        console.log(response)
        if(response.status === 201){

        }
      }) 
      .catch(function (error) {
        if(error.response.status === 401){alert("Password is incorrect.")}
        if(error.response.status === 422){alert("Username does not exist.")}
        console.log(error);
      })
      console.log()
    }

    useEffect(()=>{
                              
    },[])

    return {username,setUsername,setPassword,setPassword2,createAccount,login,newAccount,password,password2,setNewAccount}
}

export default useLogin;
