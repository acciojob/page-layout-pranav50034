
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const x = "Welcome to my website";
  const y = "This is the content of my website.";
  const z = "©️ 2023 My Website. All rights reserved.";

  return (
     <div>
        <Header x={x} />
        <Content y={y} />
        <Footer z={z} />
        ©️ 2023 My Website. All rights reserved.
     </div>
  );
}

export default App
