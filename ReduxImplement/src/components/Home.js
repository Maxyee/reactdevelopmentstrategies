import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="container">
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
