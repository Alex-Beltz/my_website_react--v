import React, { useState } from "react";
import "./styles/App.css";
import Portfolio from "./components/Portfolio";
import WorkHistory from "./components/WorkHistory";
import Gallery from "./components/Gallery";
import ImageResizerTool from "./components/ImageResizerTool";
import PdfToVoiceTool from "./components/PdfToVoiceTool";
import CryptoQuotes from "./components/CryptoQuotes";
import PreciousMetalQuotes from "./components/PreciousMetalQuotes";
import TimeZoneCalculator from "./components/TimeZoneCalculator";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // if (!sidebarOpen) {
    //   setTimeout(() => {
    //     setSidebarOpen(true);
    //   }, 800);
    // }
  };

  const sidebarWidth = sidebarOpen ? "30%" : "15%";
  const contentWidth = sidebarOpen ? "85%" : "85%";

  const sidebarSize = {
    width: sidebarWidth,
    // borderRight: sidebarOpen
    //   ? "10px inset transparent"
    //   : "3px inset transparent",
  };
  const contentSize = {
    width: contentWidth,
  };
  const overlaySize = {
    display: sidebarOpen ? "block" : "none",
  };

  // // const overlaySize = {
  // //   display: "none",
  // // };

  // // if (sidebarOpen) {
  // //   setTimeout(() => {
  // //     overlaySize.display = "block";
  // //   }, 300); // delay the block display by 0.3 seconds (300 milliseconds)
  // }
  // // else {
  // //   overlaySize.display = "none";
  // // }

  const components = {
    portfolio: <Portfolio />,
    workHistory: <WorkHistory />,
    gallery: <Gallery />,
    imageResizerTool: <ImageResizerTool />,
    pdfToVoiceTool: <PdfToVoiceTool />,
    cryptoQuotes: <CryptoQuotes />,
    preciousMetalQuotes: <PreciousMetalQuotes />,
    timeZoneCalculator: <TimeZoneCalculator />,
  };

  const handleClick = (componentName) => {
    setActiveComponent(components[componentName]);
  };

  return (
    <div className="App">
      <div className="sidebar sidebarStyle" style={sidebarSize}>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <ul className="sidebarListStyle">
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("workHistory")}
          >
            Work History
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("gallery")}
          >
            Gallery
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("imageResizerTool")}
          >
            Image Resizer Tool
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("pdfToVoiceTool")}
          >
            PDF to Voice Tool
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("cryptoQuotes")}
          >
            Crypto Quotes
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("preciousMetalQuotes")}
          >
            Precious Metals Quotes
          </li>
          <li
            className="sidebarListItemStyle"
            onClick={() => handleClick("timeZoneCalculator")}
          >
            Time Zone Calculator
          </li>
        </ul>
      </div>
      <div className="content contentStyle" style={contentSize}>
        {activeComponent || <h1>Welcome to my app!</h1>}
      </div>
      <div
        className="overlay overlayStyle"
        style={overlaySize}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}
export default App;
