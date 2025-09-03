import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./container/counter/counter";
import Todo from "./container/todo/todo";
// import { Switch } from 'antd';
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/home"
          element={
            <>
              <p> This is the Not home Page</p>
              <nav>
                <Link to="/home">Home</Link> | <Link to="/todo">Todo</Link> |{" "}
                <Link to="/counter">Counter</Link>
              </nav>
            </>
          }
        />
                <Route
          path="/"
          element={
            <>
              <p> This is the  home Page</p>
              <nav>
                <Link to="/home">Home</Link> | <Link to="/todo">Todo</Link> |{" "}
                <Link to="/counter">Counter</Link>
              </nav>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //
  // )
};

export default App;
