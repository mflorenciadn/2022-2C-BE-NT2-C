import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./Button";

//Button
// SIN JSX
// const button = document.createElement('button');
// button.innerText = 'Mi botón con JS';
// document.body.appendChild(button);

const App = () => {
  const handleClick = () => {
    alert("Presionaste el botón");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {React.createElement("button", {className: "button", onClick: () => handleClick()} )} */}
        <h1>Holaaaaa</h1>
        <Button className="button" handleClick={handleClick} />
        <Button className="button-red" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
