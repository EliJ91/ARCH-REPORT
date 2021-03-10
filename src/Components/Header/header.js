import useHeader from './headerLogic'
import './header.scss'

function Header(props) {
    const{logout,updateDB,test} = useHeader(props)
  return (
    <>
    <button onClick={()=>test("onslwht","awful company")}>TEST</button>
    {props.theUser === "Onslawht" || props.theUser === "Admin" && <button disabled onClick={()=>updateDB()}>Update DB</button>}
    {props.theUser &&
      <div className="headerContainer">
          <p className="userLogged" onClick={()=>logout()} title="Log Out">Welcome, {props.theUser}</p>
      </div>
    }
    </>

  );
}

export default Header;
