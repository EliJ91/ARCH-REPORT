import './loginPage.scss'
import useLogin from  './loginPageLogic'
import {Link} from 'react-router-dom'

function Login() {

    const{setUsername,setPassword,setPassword2,setNewAccount,login,createAccount,newAccount,username,password,password2,} = useLogin()

  return (
    <div className="loginMainContainer">
      <div className="loginContainer">
                    <input className="loginUsername" placeholder="Username" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />

                    <input className="loginPassword" placeholder="Password" type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>

                    {newAccount && 
                    <>
                    <input className="loginPassword" placeholder="Password" type="password" value={password2} onChange={(e)=>{setPassword2(e.target.value)}}/>
                    <button className="createSubmit"  onClick={()=> createAccount(username,password,password2)}>Create Account</button>
                    </>
                    }
                    {!newAccount && <button className="loginSubmit"  onClick={()=> login(username,password)}>Log In</button> }
                    <p onClick={()=>setNewAccount(!newAccount)}className="needAnAccount">{newAccount? "Already have an account?":"Need an account?"}</p>
                </div>
    </div>
  );
}

export default Login;
