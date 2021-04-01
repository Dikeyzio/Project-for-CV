import React from "react";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
     <Header />
      <NavBar />
      <Profile/>
    </div>
  );
}

export default App;
