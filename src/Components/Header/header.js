import useHeader from './headerLogic'
import './header.scss'
import {Link} from 'react-router-dom'

function Header(props) {
    const{logout,updateDB} = useHeader(props)
  return (
    <>
    {props.theUser === "Onslawht" || props.theUser === "Dev" && <button className="dev" onClick={()=>updateDB()}>Update DB</button>}
    {props.theUser &&
      <div className="headerContainer">
          <p className="userLogged" onClick={()=>logout()} title="Log Out">Welcome, {props.theUser}</p>
          <div className="headerLinkContainer">
          <Link to='/guildcoms'><div className="headerLink">AC & Co Coms</div></Link>
          <Link to='/caravanreports'><div className="headerLink">Caravan Reports</div></Link>
          </div>
      </div>
    }
    </>

  );
}

export default Header;
