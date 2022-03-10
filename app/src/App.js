import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import SearchScreen from "./SearchScreen";
import Home from "./Home";
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        
        <Routes>
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
