// COMPONETS
import Header from "./componets/Header";
import { BodyContent } from "./componets/BodyContent";
import RightBar from "./componets/RightBar";
import Portfolio from "./componets/Portfolio";
import Footer from "./componets/Footer";
import TestButton from "./componets/TestButton";
import TestUseEffect from "./componets/Test-UseEffect";

import "./index.scss";
import PropsState from "./componets/Props-State";

export default function App() {
  return (
    <div className="App main-grid">
      <Header />
      <BodyContent />
      <RightBar />
      <Portfolio />
      <Footer />
      {/*<TestButton />*/}
      <h1>Test Area</h1>
      <TestUseEffect />
      <PropsState />
    </div>
  );
}
