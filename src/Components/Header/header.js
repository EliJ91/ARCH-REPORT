import useHeader from './headerLogic'
import './header.scss'

function Header(props) {
    const{logout} = useHeader(props)
  return (
    <>
    {props.theUser &&
      <div className="headerContainer">
          <p className="userLogged" onClick={()=>logout()} title="Log Out">Welcome, {props.theUser}</p>
      </div>
    }
    </>

  );
}

export default Header;
