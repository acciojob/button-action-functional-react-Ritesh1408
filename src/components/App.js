import React, { useState} from "react";
import "./../styles/App.css";

function App() {

  const[show, setShow] = useState(false);

  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={() => setShow(true)}>
        Show Para
      </button>
      {show && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}


    </div>
  );
}


export default App;
