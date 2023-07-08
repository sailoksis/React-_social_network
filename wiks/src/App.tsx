import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Posts/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";



function App() {
  return (
    
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
        <Route path="/content/*" element={<Content />}/>
        <Route path="/dialogs/*" element={<Dialogs />}/>
        <Route path="/tables/*" element={<Table/>}/>
        </Routes>
      
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
