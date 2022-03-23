import React from "react";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'


function App() {
  
  return (
    <>
      <Header title="React App"/>
      <MainPage />
      <Footer/>
    </>
  );
}

export default App; 
