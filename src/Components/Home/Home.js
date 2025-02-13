import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
    <section id="home">
      <hero>
        <h1 style={{padding:'15px' , fontSize:'50px'}}>Welcome to My App</h1>
        <h3 style={{padding:'10px' , fontSize:'22px'}}>This is my First React JS App</h3>
        <p style={{padding:'5px' , fontSize:'16px'}}>This is the home page.</p>
      </hero>
      </section>
    </>
  );
};

export default Home;
