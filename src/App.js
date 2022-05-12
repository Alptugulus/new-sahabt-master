import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "primeflex/primeflex.css";

function App() {
  return (
    <body>
      <div className="bg-image">
        <Header />
        <Content />
        <Footer />
      </div>
    </body>
  );
}

export default App;
