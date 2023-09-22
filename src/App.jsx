import { useState } from "react";
import Inputs from "./components/Layout/Inputs";
import Navbar from "./components/Navbar";
import StartScreen from "./components/Layout/StartScreen";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  return (
    <>
      {showStartScreen ? (
        <StartScreen toggleFullScreen={setShowStartScreen} />
      ) : (
        <>
          <Navbar toggleFullScreen={setShowStartScreen} />
          {!showStartScreen && <Inputs />}
        </>
      )}
    </>
  );
}

export default App;
