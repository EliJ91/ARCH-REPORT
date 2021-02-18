import useHeader from './headerLogic'
import './header.scss'

function Header(props) {
    const{logout} = useHeader(props)
  return (

    <div className="headerContainer">
      {props.theUser&&
      <>
        <p className="userLogged">Logged in as {props.theUser}</p>
        <button onClick={()=>logout()}>Log Out</button>
        </>
      }
    </div>
  );
}

export default Header;
