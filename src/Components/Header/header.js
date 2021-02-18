import useHeader from './headerLogic'
import './header.scss'

function Header() {

    const{user} = useHeader()

  return (
    <div className="headerContainer">
        <p className="userLogged">Logged in a {user}</p>
    </div>
  );
}

export default Header;
