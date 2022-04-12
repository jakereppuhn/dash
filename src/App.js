import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import React from "react";
import Income from "./pages/Income";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Income />
    </Router>
  );
};

export default App;
