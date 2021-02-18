import CaravanReports from './Components/caravanReports'
import Login from './Components/LoginPage/loginPage'
import Header from './Components/Header/header'
import {BrowserRouter as Router,  Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Route path="/" exact render={(props)=><Login/>}/>
        <Route path="/caravanreports" render={(props)=><CaravanReports onClick={console.log(props)} />}/>
      </Router>
      
    </div>
  );
}

export default App;
