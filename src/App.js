
import './App.css';
import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particules from "react-particles-js"


function App() {
  return (
    <>
    <Particules
    className="canvas"
    params={{
      particles : {
        number:{
          value: 30,
          density:{
            enable: true,
            value_area : 900
          }
        },
        shape:{
          type: "circle",
          stroke:{
            width: 6,
            color: "#FFD700"
          }

        }
      }
    }}
     
    />
    <Navbar/>
    <Header/>
    </>

  );
}

export default App;
