// COMPONETS
import Header from "./componets/Header";
import {BodyContent} from "./componets/BodyContent";
import RightBar from "./componets/RightBar";
import Portfolio from "./componets/Portfolio";
import Footer from "./componets/Footer";
import TestButton from "./componets/TestButton";

import './index.scss'

export default function App() {
  return (
    <div className="App main-grid">
      <Header />
      <BodyContent/>
      <RightBar/>
      <Portfolio/>
      <Footer />
        {/*<TestButton />*/}
    </div>
  );
}
