// import React, { useState } from "react";
// import "./styles/App.css";
// import Portfolio from "./components/Portfolio";
// import WorkHistory from "./components/WorkHistory";
// import Gallery from "./components/Gallery";
// import ImageResizerTool from "./components/ImageResizerTool";
// import PdfToVoiceTool from "./components/PdfToVoiceTool";
// import CryptoQuotes from "./components/CryptoQuotes";
// import PreciousMetalQuotes from "./components/PreciousMetalQuotes";
// import TimeZoneCalculator from "./components/TimeZoneCalculator";

// //sidebar icons
// import CryptoQuotesIcon from "./icons/CryptoQuotes.png"
// import GalleryIcon from "./icons/Gallery.png"
// import ImageResizerToolIcon from "./icons/ImageResizerTool.png"
// import PdfToVoiceToolIcon from "./icons/PdfToVoiceTool.png"
// import portfolioIcon from "./icons/portfolio.png"
// import PreciousMetalQuotesIcon from "./icons/PreciousMetalQuotes.png"
// import TimeZoneCalculatorIcon from "./icons/TimeZoneCalculator.png"
// import WorkHistoryIcon from "./icons/WorkHistory.png"

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeComponent, setActiveComponent] = useState(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//     // if (!sidebarOpen) {
//     //   setTimeout(() => {
//     //     setSidebarOpen(true);
//     //   }, 800);
//     // }
//   };

//   const sidebarWidth = sidebarOpen ? "30%" : "15%";
//   const contentWidth = sidebarOpen ? "85%" : "85%";

//   const sidebarSize = {
//     width: sidebarWidth,
//     // borderRight: sidebarOpen
//     //   ? "10px inset transparent"
//     //   : "3px inset transparent",
//   };
//   const contentSize = {
//     width: contentWidth,
//   };
//   const overlaySize = {
//     display: sidebarOpen ? "block" : "none",
//   };

//   // // const overlaySize = {
//   // //   display: "none",
//   // // };

//   // // if (sidebarOpen) {
//   // //   setTimeout(() => {
//   // //     overlaySize.display = "block";
//   // //   }, 300); // delay the block display by 0.3 seconds (300 milliseconds)
//   // }
//   // // else {
//   // //   overlaySize.display = "none";
//   // // }

//   const components = {
//     portfolio: <Portfolio />,
//     workHistory: <WorkHistory />,
//     gallery: <Gallery />,
//     imageResizerTool: <ImageResizerTool />,
//     pdfToVoiceTool: <PdfToVoiceTool />,
//     cryptoQuotes: <CryptoQuotes />,
//     preciousMetalQuotes: <PreciousMetalQuotes />,
//     timeZoneCalculator: <TimeZoneCalculator />,
//   };

//   const handleClick = (componentName) => {
//     setActiveComponent(components[componentName]);
//   };

//   return (
//     <div className="App">
//       <div className="sidebar sidebarStyle" style={sidebarSize}>
//         <button onClick={toggleSidebar}>Toggle Sidebar</button>
//         <ul className="sidebarListStyle">
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("portfolio")}
//           >
//             Portfolio
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("workHistory")}
//           >
//             Work History
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("gallery")}
//           >
//             Gallery
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("imageResizerTool")}
//           >
//             Image Resizer Tool
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("pdfToVoiceTool")}
//           >
//             PDF to Voice Tool
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("cryptoQuotes")}
//           >
//             Crypto Quotes
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("preciousMetalQuotes")}
//           >
//             Precious Metals Quotes
//           </li>
//           <li
//             className="sidebarListItemStyle"
//             onClick={() => handleClick("timeZoneCalculator")}
//           >
//             Time Zone Calculator
//           </li>
//         </ul>
//       </div>
//       <div className="content contentStyle" style={contentSize}>
//         {activeComponent || <h1>Welcome to my app!</h1>}
//       </div>
//       <div
//         className="overlay overlayStyle"
//         style={overlaySize}
//         onClick={toggleSidebar}
//       ></div>
//     </div>
//   );
// }
// export default App;

import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Portfolio from "./components/Portfolio";
import WorkHistory from "./components/WorkHistory";
import Gallery from "./components/Gallery";
import ImageResizerTool from "./components/ImageResizerTool";
import PdfToVoiceTool from "./components/PdfToVoiceTool";
import CryptoQuotes from "./components/CryptoQuotes";
import PreciousMetalQuotes from "./components/PreciousMetalQuotes";
import TimeZoneCalculator from "./components/TimeZoneCalculator";

//sidebar icons
import CryptoQuotesIcon from "./icons/CryptoQuotes.png";
import GalleryIcon from "./icons/Gallery.png";
import ImageResizerToolIcon from "./icons/ImageResizerTool.png";
import PdfToVoiceToolIcon from "./icons/PdfToVoiceTool.png";
import portfolioIcon from "./icons/portfolio.png";
import PreciousMetalQuotesIcon from "./icons/PreciousMetalQuotes.png";
import TimeZoneCalculatorIcon from "./icons/TimeZoneCalculator.png";
import WorkHistoryIcon from "./icons/WorkHistory.png";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // // Function to set overflow hidden or auto for active component
  // const setActiveComponentOverflow = () => {
  //   const overflowValue = sidebarOpen ? "hidden" : "auto";
  //   setActiveComponent((prevActiveComponent) => {
  //     return (
  //       prevActiveComponent && (
  //         <div style={{ overflow: overflowValue }}>
  //           {prevActiveComponent.props.children}
  //         </div>
  //       )
  //     );
  //   });
  // };

  // useEffect(() => {
  //   setActiveComponentOverflow();
  // }, [sidebarOpen]);

  const sidebarWidth = sidebarOpen ? "30%" : "8%";
  const contentWidth = sidebarOpen ? "92%" : "92%";

  const sidebarSize = {
    width: sidebarWidth,
  };
  const contentSize = {
    width: contentWidth,
    // overflowY: sidebarOpen ? "hidden" : "auto",
  };
  const overlaySize = {
    display: sidebarOpen ? "block" : "none",
    // overflowY: sidebarOpen ? "hidden" : "auto",
    // width: `100% - ${sidebarWidth}`,
  };

  const iconSize = {
    height: "2.5rem",
    width: "2.5rem",
  };

  const components = {
    portfolio: <Portfolio />,
    workhistory: <WorkHistory />,
    gallery: <Gallery />,
    imageresizertool: <ImageResizerTool />,
    pdftovoicetool: <PdfToVoiceTool />,
    cryptoquotes: <CryptoQuotes />,
    preciousmetalsquotes: <PreciousMetalQuotes />,
    timezonecalculator: <TimeZoneCalculator />,
  };

  const icons = [
    { name: "Portfolio", icon: portfolioIcon },
    { name: "Work History", icon: WorkHistoryIcon },
    { name: "Gallery", icon: GalleryIcon },
    { name: "Image Resizer Tool", icon: ImageResizerToolIcon },
    { name: "PDF to Voice Tool", icon: PdfToVoiceToolIcon },
    { name: "Crypto Quotes", icon: CryptoQuotesIcon },
    { name: "Precious Metals Quotes", icon: PreciousMetalQuotesIcon },
    { name: "Time Zone Calculator", icon: TimeZoneCalculatorIcon },
  ];

  const handleClick = (componentName) => {
    setActiveComponent(components[componentName]);
  };

  return (
    <div className="App">
      <div className="sidebar sidebarStyle" style={sidebarSize}>
        <button onClick={toggleSidebar}>Menu</button>
        <ul className="sidebarListStyle">
          {icons.map((icon) => (
            <li
              key={icon.name}
              className="sidebarListItemStyle"
              onClick={() =>
                handleClick(icon.name.toLowerCase().replace(/\s+/g, ""))
              }
            >
              {sidebarOpen ? (
                <React.Fragment>
                  <img src={icon.icon} alt={icon.name} style={iconSize} />
                  {icon.name}
                </React.Fragment>
              ) : (
                <img src={icon.icon} alt={icon.name} style={iconSize} />
              )}
            </li>
          ))}
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
