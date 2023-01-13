import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import "../styles/App.css";
import JsonData from "../data/data.json";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <Header data={landingPageData.Header} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
