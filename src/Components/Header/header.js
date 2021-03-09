import useHeader from './headerLogic'
import './header.scss'

function Header(props) {
    const{logout,updateDB} = useHeader(props)
  return (
    <>
    {props.theUser === "Onslawht" || props.theUser === "Admin" && <button onClick={()=>updateDB()}>Update DB</button>}
    {props.theUser &&
      <div className="headerContainer">
          <p className="userLogged" onClick={()=>logout()} title="Log Out">Welcome, {props.theUser}</p>
      </div>
    }
    </>

  );
}

export default Header;
