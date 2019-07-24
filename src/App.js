import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./components/UserComponent";
import GithubUserComponent from "./components/GithubUserComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GithubUserComponent />
        <UserComponent />
      </header>
    </div>
  );
}

export default App;
