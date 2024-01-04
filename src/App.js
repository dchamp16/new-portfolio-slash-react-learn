// COMPONETS
import Header from "./componets/Header";
//ROUTES
import { Home } from "./componets/main-content-router/Home";
import {About} from "./componets/main-content-router/About";
import {Contact} from "./componets/main-content-router/Contact"
import Portfolio from "./componets/main-content-router/Portfolio";

import RightBar from "./componets/RightBar";

import Footer from "./componets/Footer";
import TestButton from "./componets/TestButton";
import TestUseEffect from "./componets/Test-UseEffect";

import "./index.scss";
import PropsState from "./componets/Props-State";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {
  return (
      <Router>
          <div className="App main-grid">
              <Header/>

              <Routes>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/portfolio" element={<Portfolio/>} />

              </Routes>

              <RightBar/>
              <Footer/>
              
              {/*<TestButton />*/}
              <h1>Test Area</h1>
              <TestUseEffect/>
              <PropsState/>
          </div>
      </Router>

  );
}
