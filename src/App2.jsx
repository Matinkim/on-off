import React from "react";

const DUMMY_DATA = ["Learn React", "Practice React", "Profit!"];

function Todo({ text }) {
  return <li>{text}</li>;
}

function App() {
  return (
    <ul className="app">
      {DUMMY_DATA.map((item, index) => (
        <Todo key={index} text={item} />
      ))}
    </ul>
  );
}

export default App;
