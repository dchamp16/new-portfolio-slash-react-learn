// COMPONETS
import Header from "./componets/Header";
//ROUTES
import { Main } from "./componets/Main";
import {About} from "./componets/About";

import RightBar from "./componets/RightBar";
import Portfolio from "./componets/Portfolio";
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
                  <Route path="/home" element={<Main/>} />
                  <Route path="/about" element={<About/>} />
              </Routes>

              <RightBar/>
              <Portfolio/>
              <Footer/>
              {/*<TestButton />*/}
              <h1>Test Area</h1>
              <TestUseEffect/>
              <PropsState/>
          </div>
      </Router>

  );
}
