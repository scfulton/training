import React from "react";
import "./App.css";
// import './PartsList.js';
// import './Parts.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">Car Parts</header>
      <PartsList>
        <Part>Blinker</Part>
        <Part>Manifold</Part>
      </PartsList>
    </div>
  );
}

function PartsList(props) {
  return <ul>{props.children}</ul>
}

function Part(props) {
  return <li>{props.children}</li>
}

export default App;
