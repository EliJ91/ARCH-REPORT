import CaravanReports from './Components/caravanReports'
import Login from './Components/LoginPage/loginPage'
import Header from './Components/Header/header'
import UnapprovedAccount from './Components/UnapprovedAccount/unapprovedAccount'
import SetGuildComs from './Components/SetGuildComs/setGuildComs'
import HomePage from './Components/HomeComponent/home'
import {BrowserRouter as Router,  Route} from "react-router-dom"
import {useState} from 'react'

function App() {
  const [theUser, setUser] = useState()
  return (
    <div className="App">
      <Router>
      <Header setUser={setUser} theUser={theUser}/>
        <Route path="/" exact render={(props)=><Login setUser={setUser} />}/>
        <Route path="/home" render={(props)=><HomePage/>}/>
        <Route path="/caravanreports" render={(props)=><CaravanReports />}/>
        <Route path="/forbidden" render={(props)=><UnapprovedAccount />}/>
        <Route path="/guildcoms" render={(props)=><SetGuildComs />}/>
      </Router>

    </div>
  );
}

export default App;
