import CaravanReports from './Components/caravanReports'
import Login from './Components/LoginPage/loginPage'
import {BrowserRouter as Router,  Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route path="/" exact render={(props)=><Login/>}/>
        <Route path="/caravanreports" render={(props)=><CaravanReports/>}/>
      </Router>
      
    </div>
  );
}

export default App;
