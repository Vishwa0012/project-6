import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Herotext from "./Components/Herotext";
import Badge from "./Components/Badge";
import Courses from "./Components/Courses";
import Future from "./Components/Future";
import Feedback from "./Components/Feedback";
import Blog from "./Components/Blog";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Herotext />
      <Badge />
      <Courses />
      <Future />
      <Feedback />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
