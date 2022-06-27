
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About  from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light'); //wether dark mode enable or not
  const[alert,setAlert] = useState(null);

  const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
       setAlert(null);
      },1000);
  }
  const toggleMode=() =>{
   if(mode ==='light'){
    setMode  ('dark');
    document.body.style.backgroundColor= '#042743';
    showAlert("Dark mode has been Enabled","success")
   }
   else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been Enabled","success")
   }
    
  }
  return (
   <>
<Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
<Switch>
  <Route exact path="/about">
  <About/>
  </Route>
  <Route exact path="/">
  <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  </Route>
</Switch>
</div>
 </Router>

</>   
  );
}

export default App;
