import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [alert,setAlert]= useState(null);



  const showAlert=(message,type)=>
  {
    setAlert({
      msg :message,
      type :type
    });

    setTimeout(() => {     // setTimeout is a function that takes a callback function as first parameter and the time as the second parameter.
      setAlert(null);
    }, 1500);
  }



  const [mode, setMode] = useState("light");
  const [btn, btnText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      btnText("Enable Light Mode");
      document.body.style.backgroundColor = '#1e184f';
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode("light");
      btnText("Enable Dark Mode ");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
    }
  };



  return (
    <>
    <Router>
      {/*<Navbar/>*/}

      {/*passing Props*/}
      <Navbar
        title="TEXTUTILS"
        home="HOME"
        aboutText="ABOUT US"
        mode={mode}
        toggle={toggleMode}
        btnText={btn}
      />


      <Alert alert={alert}/>


      <div className="container" >
        <Routes>

              <Route exact path="/" />
              
              <Route exact path="/home" element={<TextForm heading="Enter the Input to Analyze  : "  mode={mode} alert={showAlert}/>}/>

              <Route exact path="/about" element ={<About/>}/>
                
          
              
              
              {/* <Route path="/">
                <TextForm heading="Enter the Input to Analyze  : "  mode={mode} alert={showAlert}/>
                
              </Route> */}
              
              {/* <Route exact path="/TEXTUTILS">
                <TextForm heading="Enter the Input to Analyze  : "  mode={mode} alert={showAlert}/>
              </Route> */}

        </Routes>


         
       
      </div>

 
    </Router>
    </>
  );
}

export default App;
