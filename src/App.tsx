import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation"


//Pages
import Dashboard from "./Pages/Dashboard";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";
import Impressum from "./Components/Impressum";



const App: FC = () => {
  return (
      <div className={"container-sm"}>
          <div className={"container-sm"}>
              <Navigation/>
          </div>


          <Routes>
              <Route path={"/"} element={<Dashboard/>}/>
              <Route path={"/aboutme"} element={<AboutMe/>}/>
              <Route path={"/impressum"} element={<Impressum/>}/>
          </Routes>

          <div>
              <Footer/>
          </div>
      </div>
  );
}

export default App;
